import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Details from "./details";


configure({
  adapter: new Adapter(),
});

const genre = `Comedy`;
const runTime = `1h 39m`;
const releaseDate = 2014;
const director = `Wes Andreson`;
const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`];

describe(`DetailsComponent`, () => {
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

  test(`should have "director"`, () => {
    const detailsComponent = shallow(
        <Details
          genre={genre}
          runTime={runTime}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />
    );
    const directorText = detailsComponent.find(`span.movie-card__details-value`).at(0).text();
    expect(directorText).toBe(director);
  });

  test(`should have "starring"`, () => {
    const detailsComponent = shallow(
        <Details
          genre={genre}
          runTime={runTime}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />
    );
    const starringText = detailsComponent.find(`span.movie-card__details-value`).at(1).text();
    expect(starringText).toBe(starring.join(`,`));
  });

  test(`should have "Run Time"`, () => {
    const detailsComponent = shallow(
        <Details
          genre={genre}
          runTime={runTime}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />
    );
    const runTimeText = detailsComponent.find(`span.movie-card__details-value`).at(2).text();
    expect(runTimeText).toBe(runTime);
  });

  test(`should have "Genre"`, () => {
    const detailsComponent = shallow(
        <Details
          genre={genre}
          runTime={runTime}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />
    );
    const genreText = detailsComponent.find(`span.movie-card__details-value`).at(3).text();
    expect(genreText).toBe(genre);
  });

  test(`should have "Released"`, () => {
    const detailsComponent = shallow(
        <Details
          genre={genre}
          runTime={runTime}
          releaseDate={releaseDate}
          director={director}
          starring={starring}
        />
    );
    const releasedText = detailsComponent.find(`span.movie-card__details-value`).at(4).text();
    expect(releasedText).toBe(`${releaseDate}`);
  });
});
