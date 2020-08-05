import * as React from "react";
import * as render from "react-test-renderer";

import Details from "@pages/film/details/details";


const genre = `Comedy`;
const runTime = `1h 39m`;
const releaseDate = 2014;
const director = `Wes Andreson`;
const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`];

test(`should render component`, () => {
  const tree = render
    .create(
        <Details
          genre={genre}
          runTime={runTime}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
