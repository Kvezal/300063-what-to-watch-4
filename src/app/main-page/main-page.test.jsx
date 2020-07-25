import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import MainPage from "./main-page";


describe(`MainPage`, () => {
  const avatar = `avatar.jpg`;
  const films = [
    {
      id: 1,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      genre: `test`,
    },
    {
      id: 2,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      genre: `test`,
    },
    {
      id: 3,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/macbeth.jpg`,
      title: `Macbeth`,
      genre: `test`,
    },
    {
      id: 4,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/aviator.jpg`,
      title: `Aviator`,
      genre: `test`,
    },
  ];

  const promoFilm = {
    id: 1,
    name: `The Grand Budapest Hotel`,
    picture: {
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
      cover: `img/bg-the-grand-budapest-hotel.jpg`,
    },
    genres: [`Drama`],
    runTime: `1h 39m`,
    releaseDate: 2014,
  };

  const filmFilters = [
    {name: `All genres`, id: `All genres`},
    {name: `Comedies`, id: `Comedy`},
    {name: `Crime`, id: `Crime`}
  ];

  test(`should match to snapshot`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <MainPage
              promoFilm={promoFilm}
              genre=""
              onFilterClick={() => {}}
              films={films}
              avatar={avatar}
              onCardClick={() => {}}
              onStepChange={() => {}}
              step={1}
              tabList={filmFilters}
              activeTab={filmFilters[0].id}
              onActiveTabChange={() => {}}
            />
          </MemoryRouter>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
