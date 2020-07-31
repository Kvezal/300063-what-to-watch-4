import * as React from "react";
import * as render from "react-test-renderer";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Details from "./details";


configure({
  adapter: new Adapter(),
});

describe(`DetailsComponent`, () => {
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

  test(`should create component`, () => {
    const detailsComponent = shallow(
        <Details
          genre={genre}
          runTime={runTime}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />
    );
    const movieText = detailsComponent.find(`.movie-card__text`);
    expect(movieText).toHaveLength(1);
  });
});
