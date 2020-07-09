import React from "react";
import render from "react-test-renderer";

import FilmDescription from "./film-description";
import FilmOverviewTabsEnum from "@enums/film-overview-tabs";


describe(`FilmDescriptionComponent`, () => {
  const avatar = `avatar.jpg`;
  const likedFilms = [
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

  const overviewFilm = {
    id: 1,
    name: `The Grand Budapest Hotel`,
    picture: {
      cover: `the-grand-budapest-hotel-poster.jpg`,
      poster: `bg-the-grand-budapest-hotel.jpg`,
    },
    genres: [`drama`],
    releaseDate: 2014,
    rating: {
      score: 8.9,
      level: `Very good`,
      count: 240,
    },
    runTime: `1h 39m`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `and other`],
  };

  const tabList = [
    {name: `Overview`, id: FilmOverviewTabsEnum.OVERVIEW},
    {name: `Details`, id: FilmOverviewTabsEnum.DETAILS},
    {name: `Reviews`, id: FilmOverviewTabsEnum.REVIEWS},
  ];

  test(`should render component`, () => {
    const tree = render
      .create(
          <FilmDescription
            likedFilms={likedFilms}
            onActiveTabChange={() => {}}
            info={overviewFilm}
            avatar={avatar}
            onCardClick={() => {}}
            renderTabs={() => {}}
            activeTab={`overview`}
            reviews={[]}
            tabList={tabList}
          />,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
