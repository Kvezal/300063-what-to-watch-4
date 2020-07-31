import * as React from "react";
import * as render from "react-test-renderer";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withVideoPlayer from "./with-video-player";


configure({
  adapter: new Adapter(),
});

interface ITestComponent {
  isPlaying: boolean;
  renderPlayer: () => React.ReactNode;
}
const TestComponent: React.FC<ITestComponent> = (props: ITestComponent) => {
  const {renderPlayer} = props;
  return <div>
    {renderPlayer()}
  </div>;
};

const TestComponentWithHOC = withVideoPlayer(TestComponent);

describe(`withVideoPlayerHOC`, () => {
  const source = `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
  const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

  test(`should render component`, () => {
    const tree = render
      .create(
          <TestComponentWithHOC
            source={source}
            poster={poster}
            isPlaying={false}
            canStop={false}
            muted={true}
          />,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should have video`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          source={source}
          poster={poster}
          isPlaying={false}
          canStop={false}
          muted={true}
        />
    );
    const video = wrapper.find(`video`);
    expect(video).toHaveLength(1);
  });

  test(`Check HOC's callback turn on video "play"`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          source={source}
          poster={poster}
          isPlaying={true}
          canStop={false}
          muted={true}
        />
    );
    jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => new Promise(() => null));
    const {videoRef} = wrapper.instance();
    wrapper.instance().componentDidUpdate();
    expect(videoRef.current.play).toHaveBeenCalled();
  });
  //
  test(`Check HOC's callback turn off video "pause"`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          source={source}
          poster={poster}
          isPlaying={false}
          canStop={false}
          muted={true}
        />
    );
    jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => null);
    const {videoRef} = wrapper.instance();
    wrapper.instance().componentDidUpdate();
    expect(videoRef.current.pause).toHaveBeenCalled();
  });
});
