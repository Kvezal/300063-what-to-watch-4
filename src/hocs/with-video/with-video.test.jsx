import React, {Fragment} from "react";
import PropTypes from "prop-types";
import render from "react-test-renderer";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withVideo from "./with-video";


const TestComponent = (props) => {
  const {children} = props;
  return <Fragment>{children}</Fragment>;
};

TestComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const TestComponentWithHOC = withVideo(TestComponent);

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`withVideoHOC`, () => {
  test(`should render component`, () => {
    const tree = render
      .create(
          <TestComponentWithHOC
            source="source"
            poster="poster"
            isPlaying={false}
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
          source="source"
          poster="poster"
          isPlaying={false}
          muted={true}
        />
    );
    const video = wrapper.find(`video`);
    expect(video).toHaveLength(1);
  });

  test(`Check HOC's callback turn on video "play"`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          source="source"
          poster="poster"
          isPlaying={true}
          muted={true}
        />
    );
    jest.spyOn(window.HTMLMediaElement.prototype, `play`).mockImplementation(() => {});
    const {_videoRef} = wrapper.instance();
    wrapper.instance().componentDidUpdate();
    expect(_videoRef.current.play).toHaveBeenCalled();
  });

  test(`Check HOC's callback turn off video "pause"`, () => {
    const wrapper = mount(
        <TestComponentWithHOC
          source="source"
          poster="poster"
          isPlaying={false}
          muted={true}
        />
    );
    jest.spyOn(window.HTMLMediaElement.prototype, `pause`).mockImplementation(() => {});
    const {_videoRef} = wrapper.instance();
    wrapper.instance().componentDidUpdate();
    expect(_videoRef.current.pause).toHaveBeenCalled();
  });
});
