import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withVideoPlayer from "./with-video-player";


Enzyme.configure({
  adapter: new Adapter(),
});

const TestComponent = (props) => {
  const {renderPlayer} = props;

  const videoPlayerParams = {
    preview: `path_to_preview`,
    poster: `path_to_poster`,
    isActive: false,
    muted: false,
  };
  return <div>
    {renderPlayer(videoPlayerParams)}
  </div>;
};

TestComponent.propTypes = {
  isActive: PropTypes.bool.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const TestComponentWithHOC = withVideoPlayer(TestComponent);

describe(`withVideoPlayerHOC`, () => {
  test(`should add video player`, () => {
    const testComponent = mount(<TestComponentWithHOC isActive={false}/>);
    const renderPlayer = testComponent.find(`video`);
    expect(renderPlayer).toHaveLength(1);
  });
});
