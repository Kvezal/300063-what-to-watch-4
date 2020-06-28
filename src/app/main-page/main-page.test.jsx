import React from "react";
import renderer from "react-test-renderer";

import MainPage from "./main-page";


describe(`MainPage`, () => {
  const avatar = `avatar.jpg`;
  const currentFilmGenres = [`Drama`];
  const releaseDate = 1984;
  const filmList = [
    {
      id: 1,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
    },
    {
      id: 2,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
    },
    {
      id: 3,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/macbeth.jpg`,
      title: `Macbeth`,
    },
    {
      id: 4,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/aviator.jpg`,
      title: `Aviator`,
    },
  ];

  it(`should match to snapshot`, () => {
    const tree = renderer
      .create(
          <MainPage
            currentFilmGenres={currentFilmGenres}
            releaseDate={releaseDate}
            filmList={filmList}
            avatar={avatar}
            onCardClick={() => {}}
          />,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
