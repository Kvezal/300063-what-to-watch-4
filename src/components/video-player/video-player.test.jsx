import React from "react";
import render from "react-test-renderer";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import VideoPlayer from "./video-player";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`VideoPlayerComponent`, () => {
  const source = `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`;
  const poster = `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`;

  test(`should render component`, () => {
    const tree = render
      .create(
          <VideoPlayer
            source={source}
            poster={poster}
            isPlaying={false}
            muted={true}
          />,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const videoPlayerComponent = mount(
        <VideoPlayer
          source={source}
          poster={poster}
          isPlaying={false}
          muted={true}
        />
    );
    const videoPlayer = videoPlayerComponent.find(`video`);
    expect(videoPlayer).toHaveLength(1);
  });
});
