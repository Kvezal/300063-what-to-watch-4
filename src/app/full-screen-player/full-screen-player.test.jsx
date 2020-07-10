import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FullScreenPlayer from "./full-screen-player";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FullScreenPlayerComponent`, () => {
  test(`should create component`, () => {
    const fullScreenPlayerComponent = shallow(
        <FullScreenPlayer
          renderPlayer={() => {}}
          isActive={false}
          time={0}
          duration={0}
          onActiveChange={() => {}}
        />,
        {createNodeMock: () => ({})}
    );
    const player = fullScreenPlayerComponent.find(`.player`);
    expect(player).toHaveLength(1);
  });

  test(`should have "play button" when player isn't active`, () => {
    const fullScreenPlayerComponent = shallow(
        <FullScreenPlayer
          renderPlayer={() => {}}
          isActive={false}
          time={0}
          duration={0}
          onActiveChange={() => {}}
        />
    );
    const playButton = fullScreenPlayerComponent.find(`.player__play use[xlinkHref="#play-s"]`);
    expect(playButton).toHaveLength(1);
  });

  test(`should have "pause button" when player is active`, () => {
    const fullScreenPlayerComponent = shallow(
        <FullScreenPlayer
          renderPlayer={() => {}}
          isActive={true}
          time={0}
          duration={0}
          onActiveChange={() => {}}
        />
    );
    const playButton = fullScreenPlayerComponent.find(`.player__play use[xlinkHref="#pause"]`);
    expect(playButton).toHaveLength(1);
  });

  test(`should be pressed play player button`, () => {
    const onPlayerButtonClick = jest.fn();
    const fullScreenPlayerComponent = shallow(
        <FullScreenPlayer
          renderPlayer={() => {}}
          isActive={true}
          time={0}
          duration={0}
          onActiveChange={onPlayerButtonClick}
        />
    );
    fullScreenPlayerComponent.find(`.player__play`).simulate(`click`);
    expect(onPlayerButtonClick).toBeCalled();
  });

  test(`should have correct time duration`, () => {
    const fullScreenPlayerComponent = shallow(
        <FullScreenPlayer
          renderPlayer={() => {}}
          isActive={true}
          time={10}
          duration={3700}
          onActiveChange={() => {}}
        />
    );
    const filmDuration = fullScreenPlayerComponent.find(`.player__time-value`).text();
    expect(filmDuration).toBe(`01:01:30`);
  });
});
