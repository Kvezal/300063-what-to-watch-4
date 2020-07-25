import React from "react";
import render from "react-test-renderer";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withVideoPlayer from "./with-video-player";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = (props) => {
  const {renderPlayer} = props;

  return <div>
    {renderPlayer()}
  </div>;
};

TestComponent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const TestComponentWithHOC = withVideoPlayer(TestComponent);

describe(`withVideoPlayerHOC`, () => {
  const film = {
    id: 1,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Drama`,
    href: `movie-page.html`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
  };

  test(`should render component`, () => {
    const tree = render
      .create(
          <TestComponentWithHOC
            info={film}
            isActive={false}
          />,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should have video`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          info={film}
          isActive={false}
        />
    );
    const video = wrapper.find(`video`);
    expect(video).toHaveLength(1);
  });

  test(`Check HOC's callback turn on video "play"`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          info={film}
          isActive={true}
        />
    );
    jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
    const {_videoRef} = wrapper.instance();
    wrapper.instance().componentDidUpdate();
    expect(_videoRef.current.play).toHaveBeenCalled();
  });
  //
  test(`Check HOC's callback turn off video "pause"`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          info={film}
          isActive={false}
        />
    );
    jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});
    const {_videoRef} = wrapper.instance();
    wrapper.instance().componentDidUpdate();
    expect(_videoRef.current.pause).toHaveBeenCalled();
  });
});
