import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmOverview from "./film-overview";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmOverview`, () => {
  const avatar = `avatar.jpg`;
  const likedFilms = [
    {id: 1, href: `movie-page.html`, picture: `fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts: The Crimes of Grindelwald`},
    {id: 2, href: `movie-page.html`, picture: `bohemian-rhapsody.jpg`, title: `Bohemian Rhapsody`},
    {id: 3, href: `movie-page.html`, picture: `macbeth.jpg`, title: `Macbeth`},
    {id: 4, href: `movie-page.html`, picture: `aviator.jpg`, title: `Aviator`},
  ];

  const overviewFilm = {
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

  test(`should create component`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const filmOverview = filmOverviewComponent.find(`section.movie-card--full`);
    expect(filmOverview).toHaveLength(1);
  });

  test(`should have liked films`, () => {
    const filmOverviewComponent = mount(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const filmCards = filmOverviewComponent.find(`article.small-movie-card`);
    expect(filmCards).toHaveLength(likedFilms.length);
  });

  test(`should have film name`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const filmName = filmOverviewComponent.find(`h2.movie-card__title`).text();
    expect(filmName).toBe(overviewFilm.name);
  });

  test(`should have genres`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const genres = filmOverviewComponent.find(`.movie-card__genre`).text();
    expect(genres.includes(overviewFilm.genres[0])).toBeTruthy();
  });

  test(`should have release date`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const releaseDate = filmOverviewComponent.find(`.movie-card__year`).text();
    expect(releaseDate).toBe(`${overviewFilm.releaseDate}`);
  });

  test(`should have rating score`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const ratingScore = filmOverviewComponent.find(`.movie-rating__score`).text();
    expect(ratingScore).toBe(`${overviewFilm.rating.score}`);
  });

  test(`should have rating level`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const ratingLevel = filmOverviewComponent.find(`.movie-rating__level`).text();
    expect(ratingLevel).toBe(`${overviewFilm.rating.level}`);
  });

  test(`should have rating count`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const ratingCount = filmOverviewComponent.find(`.movie-rating__count`).text();
    expect(ratingCount.includes(overviewFilm.rating.count)).toBeTruthy();
  });

  test(`should have director`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const director = filmOverviewComponent.find(`.movie-card__director`).text();
    expect(director.includes(overviewFilm.director)).toBeTruthy();
  });

  test(`should have starring`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const starring = filmOverviewComponent.find(`.movie-card__starring`).text();
    expect(starring.includes(overviewFilm.starring)).toBeTruthy();
  });

  test(`should have poster`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const poster = filmOverviewComponent.find(`.movie-card__poster img`).props().src;
    expect(poster.includes(overviewFilm.picture.poster)).toBeTruthy();
  });

  test(`should have cover`, () => {
    const filmOverviewComponent = shallow(
        <FilmOverview
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
        />
    );
    const cover = filmOverviewComponent.find(`.movie-card__bg img`).props().src;
    expect(cover.includes(overviewFilm.picture.cover)).toBeTruthy();
  });
});
