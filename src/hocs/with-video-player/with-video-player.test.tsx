import * as render from "react-test-renderer";
import * as React from "react";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";


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
