import React from "react";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmDescription from "./film-description";
import FilmOverviewTabsEnum from "@enums/film-overview-tabs";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmDescription`, () => {
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

  test(`should create component`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
          onCardClick={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const filmOverview = filmOverviewComponent.find(`section.movie-card--full`);
    expect(filmOverview).toHaveLength(1);
  });

  test(`should have liked films`, () => {
    const filmOverviewComponent = mount(
        <MemoryRouter>
          <FilmDescription
            likedFilms={likedFilms}
            info={overviewFilm}
            avatar={avatar}
            onCardClick={() => {}}
            renderTabs={() => {}}
            activeTab={`overview`}
            reviews={[]}
            tabList={tabList}
            onActiveTabChange={() => {}}
          />
        </MemoryRouter>
    );
    const filmCards = filmOverviewComponent.find(`article.small-movie-card`);
    expect(filmCards).toHaveLength(likedFilms.length);
  });

  test(`should have film name`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
          onCardClick={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const filmName = filmOverviewComponent.find(`h2.movie-card__title`).text();
    expect(filmName).toBe(overviewFilm.name);
  });

  test(`should have genres`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
          onCardClick={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const genres = filmOverviewComponent.find(`.movie-card__genre`).text();
    expect(genres.includes(overviewFilm.genres[0])).toBeTruthy();
  });

  test(`should have release date`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
          onCardClick={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const releaseDate = filmOverviewComponent.find(`.movie-card__year`).text();
    expect(releaseDate).toBe(`${overviewFilm.releaseDate}`);
  });

  test(`should have poster`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
          onCardClick={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const poster = filmOverviewComponent.find(`.movie-card__poster img`).props().src;
    expect(poster.includes(overviewFilm.picture.poster)).toBeTruthy();
  });

  test(`should have cover`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={overviewFilm}
          avatar={avatar}
          onCardClick={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const cover = filmOverviewComponent.find(`.movie-card__bg img`).props().src;
    expect(cover.includes(overviewFilm.picture.cover)).toBeTruthy();
  });
});
