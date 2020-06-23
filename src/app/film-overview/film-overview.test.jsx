import React from "react";
import render from "react-test-renderer";

import FilmOverview from "./film-overview";


describe(`FileOverviewComponent`, () => {
  const avatar = `avatar.jpg`;
  const likedFilms = [
    {id: 1, href: `movie-page.html`, picture: `fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts: The Crimes of Grindelwald`},
    {id: 2, href: `movie-page.html`, picture: `bohemian-rhapsody.jpg`, title: `Bohemian Rhapsody`},
    {id: 3, href: `movie-page.html`, picture: `macbeth.jpg`, title: `Macbeth`},
    {id: 4, href: `movie-page.html`, picture: `aviator.jpg`, title: `Aviator`},
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
    descriptions: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
    ],
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe
and other`,
  };

  test(`should render component`, () => {
    const tree = render
      .create(
          <FilmOverview
            likedFilms={likedFilms}
            info={overviewFilm}
            avatar={avatar}
            onCardClick={() => {}}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
