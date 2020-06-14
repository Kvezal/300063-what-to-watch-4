import React from "react";
import renderer from "react-test-renderer";

import App from "./app";


describe(`App`, () => {
  const currentFilmGenres = [`Drama`];
  const releaseDate = 1984;
  const filmList = [
    {id: 1, picture: `fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts: The Crimes of Grindelwald`},
    {id: 2, picture: `bohemian-rhapsody.jpg`, title: `Bohemian Rhapsody`},
    {id: 3, picture: `macbeth.jpg`, title: `Macbeth`},
    {id: 4, picture: `aviator.jpg`, title: `Aviator`},
  ];

  it(`should match to snapshot`, () => {
    const tree = renderer
      .create(
          <App
            currentFilmGenres={currentFilmGenres}
            releaseDate={releaseDate}
            filmList={filmList}
            onMainTitleClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
