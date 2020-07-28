import React from "react";
import render from "react-test-renderer";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";

import {EFilmOverviewTab} from "@common/enums";
import {AuthorizationStatus} from "@store/user/const";

import Film from "./film";


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
      backgroundColor: `color1`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
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
      backgroundColor: `color2`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
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
      backgroundColor: `color3`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
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
      backgroundColor: `color4`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
  },
];

const tabList = [
  {name: `Overview`, id: EFilmOverviewTab.OVERVIEW},
  {name: `Details`, id: EFilmOverviewTab.DETAILS},
  {name: `Reviews`, id: EFilmOverviewTab.REVIEWS},
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmPage`, () => {
  test(`should render component`, () => {
    const tree = render
      .create(
          <MemoryRouter>
            <Film
              likedFilms={likedFilms}
              favoriteFilms={[]}
              onActiveTabChange={() => {}}
              info={likedFilms[0]}
              avatar={avatar}
              onFilmChoose={() => {}}
              renderTabs={() => {}}
              activeTab={`overview`}
              reviews={[]}
              tabList={tabList}
              authorizationStatus={AuthorizationStatus.AUTH}
              onFavoriteFilmClick={() => {}}
              onReviewsLoad={() => {}}
            />
          </MemoryRouter>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const filmOverviewComponent = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={() => {}}
        onReviewsLoad={() => {}}
      />
    );
    const filmOverview = filmOverviewComponent.find(`section.movie-card--full`);
    expect(filmOverview).toHaveLength(1);
  });

  test(`should have liked films`, () => {
    const filmOverviewComponent = mount(
      <MemoryRouter>
        <Film
          likedFilms={likedFilms}
          favoriteFilms={[]}
          info={likedFilms[0]}
          avatar={avatar}
          onFilmChoose={() => {}}
          renderTabs={() => {}}
          activeTab={`overview`}
          reviews={[]}
          tabList={tabList}
          onActiveTabChange={() => {}}
          authorizationStatus={AuthorizationStatus.AUTH}
          onFavoriteFilmClick={() => {}}
          onReviewsLoad={() => {}}
        />
      </MemoryRouter>
    );
    const filmCards = filmOverviewComponent.find(`article.small-movie-card`);
    expect(filmCards).toHaveLength(likedFilms.length);
  });

  test(`should have film name`, () => {
    const filmOverviewComponent = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={() => {}}
        onReviewsLoad={() => {}}
      />
    );
    const filmName = filmOverviewComponent.find(`h2.movie-card__title`).text();
    expect(filmName).toBe(likedFilms[0].name);
  });

  test(`should have genres`, () => {
    const filmOverviewComponent = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={() => {}}
        onReviewsLoad={() => {}}
      />
    );
    const genres = filmOverviewComponent.find(`.movie-card__genre`).text();
    expect(genres.includes(likedFilms[0].genre)).toBeTruthy();
  });

  test(`should have release date`, () => {
    const filmOverviewComponent = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={() => {}}
        onReviewsLoad={() => {}}
      />
    );
    const releaseDate = filmOverviewComponent.find(`.movie-card__year`).text();
    expect(releaseDate).toBe(`${likedFilms[0].releaseDate}`);
  });

  test(`should have poster`, () => {
    const filmOverviewComponent = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={() => {}}
        onReviewsLoad={() => {}}
      />
    );
    const poster = filmOverviewComponent.find(`.movie-card__poster img`).props().src;
    expect(poster.includes(likedFilms[0].picture.poster)).toBeTruthy();
  });

  test(`should have cover`, () => {
    const filmOverviewComponent = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={() => {}}
        onReviewsLoad={() => {}}
      />
    );
    const cover = filmOverviewComponent.find(`.movie-card__bg img`).props().src;
    expect(cover.includes(likedFilms[0].picture.cover)).toBeTruthy();
  });

  test(`add favorite list button should be clicked`, () => {
    const onFavoriteFilmClick = jest.fn();
    const mainPage = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={onFavoriteFilmClick}
        onReviewsLoad={() => {}}
      />
    );
    mainPage.find(`button.movie-card__button`).simulate(`click`);
    expect(onFavoriteFilmClick).toHaveBeenCalledTimes(1);
  });

  test(`should be called when component updated`, () => {
    const onReviewsLoad = jest.fn();
    const mainPage = shallow(
      <Film
        likedFilms={likedFilms}
        favoriteFilms={[]}
        info={likedFilms[0]}
        avatar={avatar}
        onFilmChoose={() => {}}
        renderTabs={() => {}}
        activeTab={`overview`}
        reviews={[]}
        tabList={tabList}
        onActiveTabChange={() => {}}
        authorizationStatus={AuthorizationStatus.AUTH}
        onFavoriteFilmClick={() => {}}
        onReviewsLoad={onReviewsLoad}
      />
    );
    expect(onReviewsLoad).toHaveBeenCalledTimes(1);
    mainPage.instance().componentDidUpdate();
    expect(onReviewsLoad).toHaveBeenCalledTimes(2);
  });
});
