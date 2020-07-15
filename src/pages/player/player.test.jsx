import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Player from "./player";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`PlayerComponent`, () => {
  test(`should create component`, () => {
    const fullScreenPlayerComponent = shallow(
        <Player
          renderPlayer={() => {}}
          isActive={false}
          time={0}
          duration={0}
          onActiveChange={() => {}}
          onFullScreenOpen={() => {}}
        />,
        {createNodeMock: () => ({})}
    );
    const player = fullScreenPlayerComponent.find(`.player`);
    expect(player).toHaveLength(1);
  });

  test(`should have "play button" when player isn't active`, () => {
    const fullScreenPlayerComponent = shallow(
        <Player
          renderPlayer={() => {}}
          isActive={false}
          time={0}
          duration={0}
          onActiveChange={() => {}}
          onFullScreenOpen={() => {}}
        />
    );
    const playButton = fullScreenPlayerComponent.find(`.player__play use[xlinkHref="#play-s"]`);
    expect(playButton).toHaveLength(1);
  });

  test(`should have "pause button" when player is active`, () => {
    const fullScreenPlayerComponent = shallow(
        <Player
          renderPlayer={() => {}}
          isActive={true}
          time={0}
          duration={0}
          onActiveChange={() => {}}
          onFullScreenOpen={() => {}}
        />
    );
    const playButton = fullScreenPlayerComponent.find(`.player__play use[xlinkHref="#pause"]`);
    expect(playButton).toHaveLength(1);
  });

  test(`should be pressed play player button`, () => {
    const onPlayerButtonClick = jest.fn();
    const fullScreenPlayerComponent = shallow(
        <Player
          renderPlayer={() => {}}
          isActive={true}
          time={0}
          duration={0}
          onActiveChange={onPlayerButtonClick}
          onFullScreenOpen={() => {}}
        />
    );
    fullScreenPlayerComponent.find(`.player__play`).simulate(`click`);
    expect(onPlayerButtonClick).toBeCalled();
  });

  test(`should have correct time duration`, () => {
    const fullScreenPlayerComponent = shallow(
        <Player
          renderPlayer={() => {}}
          isActive={true}
          time={10}
          duration={3700}
          onActiveChange={() => {}}
          onFullScreenOpen={() => {}}
        />
    );
    const filmDuration = fullScreenPlayerComponent.find(`.player__time-value`).text();
    expect(filmDuration).toBe(`01:01:30`);
  });

  test(`should be pressed full screen button`, () => {
    const onFullScreenOpenClick = jest.fn();
    const fullScreenPlayerComponent = shallow(
        <Player
          renderPlayer={() => {}}
          isActive={true}
          time={0}
          duration={0}
          onActiveChange={() => {}}
          onFullScreenOpen={onFullScreenOpenClick}
        />
    );
    fullScreenPlayerComponent.find(`.player__full-screen`).simulate(`click`);
    expect(onFullScreenOpenClick).toBeCalled();
  });
});
