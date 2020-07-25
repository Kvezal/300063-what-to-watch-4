import React from "react";
import {MemoryRouter} from "react-router-dom";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmDescription from "./film-description";
import {FilmOverviewTabsEnum} from "@common/enums";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmDescription`, () => {
  const avatar = `avatar.jpg`;
  const likedFilms = [
    {
      id: 1,
      name: `name 1`,
      genre: `Crime`,
      runTime: `3h 49m`,
      releaseDate: 1984,
      description: `description 1`,
      director: `director 1`,
      rating: {
        score: 9.9,
        count: 276395,
        assessment: `Very good`,
      },
      source: {
        video: `video1`,
        previewVideo: `previewVideo1`,
      },
      picture: {
        poster: `poster1`,
        preview: `preview1`,
        cover: `cover1`,
        color: `color1`,
      },
      starring: [
        `Robert De Niro`,
        `James Woods`,
        `Elizabeth McGovern`
      ],
    },
    {
      id: 2,
      name: `name 2`,
      genre: `Crime`,
      runTime: `3h 49m`,
      releaseDate: 1984,
      description: `description 2`,
      director: `director 2`,
      rating: {
        score: 9.9,
        count: 276395,
        assessment: `Very good`,
      },
      source: {
        video: `video2`,
        previewVideo: `previewVideo2`,
      },
      picture: {
        poster: `poster2`,
        preview: `preview2`,
        cover: `cover2`,
        color: `color2`,
      },
      starring: [
        `Robert De Niro`,
        `James Woods`,
        `Elizabeth McGovern`
      ],
    },
    {
      id: 3,
      name: `name 3`,
      genre: `Crime`,
      runTime: `3h 49m`,
      releaseDate: 1984,
      description: `description 3`,
      director: `director 3`,
      rating: {
        score: 9.9,
        count: 276395,
        assessment: `Very good`,
      },
      source: {
        video: `video3`,
        previewVideo: `previewVideo3`,
      },
      picture: {
        poster: `poster3`,
        preview: `preview3`,
        cover: `cover3`,
        color: `color3`,
      },
      starring: [
        `Robert De Niro`,
        `James Woods`,
        `Elizabeth McGovern`
      ],
    },
    {
      id: 4,
      name: `name 4`,
      genre: `Crime`,
      runTime: `3h 49m`,
      releaseDate: 1984,
      description: `description 4`,
      director: `director 4`,
      rating: {
        score: 9.9,
        count: 276395,
        assessment: `Very good`,
      },
      source: {
        video: `video4`,
        previewVideo: `previewVideo4`,
      },
      picture: {
        poster: `poster4`,
        preview: `preview4`,
        cover: `cover4`,
        color: `color4`,
      },
      starring: [
        `Robert De Niro`,
        `James Woods`,
        `Elizabeth McGovern`
      ],
    },
  ];

  const tabList = [
    {name: `Overview`, id: FilmOverviewTabsEnum.OVERVIEW},
    {name: `Details`, id: FilmOverviewTabsEnum.DETAILS},
    {name: `Reviews`, id: FilmOverviewTabsEnum.REVIEWS},
  ];

  test(`should create component`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={likedFilms[0]}
          avatar={avatar}
          onFilmChoose={() => {}}
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
            info={likedFilms[0]}
            avatar={avatar}
            onFilmChoose={() => {}}
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
          info={likedFilms[0]}
          avatar={avatar}
          onFilmChoose={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const filmName = filmOverviewComponent.find(`h2.movie-card__title`).text();
    expect(filmName).toBe(likedFilms[0].name);
  });

  test(`should have genres`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={likedFilms[0]}
          avatar={avatar}
          onFilmChoose={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const genres = filmOverviewComponent.find(`.movie-card__genre`).text();
    expect(genres.includes(likedFilms[0].genre)).toBeTruthy();
  });

  test(`should have release date`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={likedFilms[0]}
          avatar={avatar}
          onFilmChoose={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const releaseDate = filmOverviewComponent.find(`.movie-card__year`).text();
    expect(releaseDate).toBe(`${likedFilms[0].releaseDate}`);
  });

  test(`should have poster`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={likedFilms[0]}
          avatar={avatar}
          onFilmChoose={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const poster = filmOverviewComponent.find(`.movie-card__poster img`).props().src;
    expect(poster.includes(likedFilms[0].picture.poster)).toBeTruthy();
  });

  test(`should have cover`, () => {
    const filmOverviewComponent = shallow(
        <FilmDescription
          likedFilms={likedFilms}
          info={likedFilms[0]}
          avatar={avatar}
          onFilmChoose={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
        />
    );
    const cover = filmOverviewComponent.find(`.movie-card__bg img`).props().src;
    expect(cover.includes(likedFilms[0].picture.cover)).toBeTruthy();
  });
});
