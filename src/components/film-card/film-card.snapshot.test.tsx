import * as React from "react";
import * as render from "react-test-renderer";

import FilmCard from "./film-card";


const filmName = `Fantastic Beasts: The Crimes of Grindelwald`;

test(`should render component`, () => {
  const tree = render
    .create(
        <FilmCard
          filmId={1}
          filmName={filmName}
          onCardClick={() => null}
          onPlayingChange={() => null}
          renderPlayer={() => null}
        />, {
          createNodeMock: () => ({}),
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
