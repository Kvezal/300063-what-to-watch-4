import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import Player from "@pages/player/player";


test(`should render component`, () => {
  const tree = render.create(
      <MemoryRouter>
        <Player
          renderPlayer={() => null}
          isPlaying={false}
          time={0}
          duration={0}
          onPlayingChange={() => null}
          onFullScreenOpen={() => null}
        />
      </MemoryRouter>,
      {createNodeMock: () => ({})}
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
