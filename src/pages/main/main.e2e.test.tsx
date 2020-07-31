import * as React from "react";
import {configure, shallow, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";

import {ALL_GENRES} from "@common/consts";
import {EAuthorizationStatus} from "@store/user/interface";

import Main from "./main";


configure({
  adapter: new Adapter(),
});

const avatar = `avatar.jpg`;
const films = [
  {
    id: 1,
    name: `name 1`,
    genre: `Drama`,
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
    genre: `Comedy`,
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
  {
    id: 5,
    name: `name 5`,
    genre: `Thriller`,
    runTime: `3h 59m`,
    releaseDate: 1985,
    description: `description 5`,
    director: `director 5`,
    rating: {
      score: 9.9,
      count: 276395,
      assessment: `Very good`,
    },
    source: {
      video: `video5`,
      previewVideo: `previewVideo5`,
    },
    picture: {
      poster: `poster5`,
      preview: `preview5`,
      cover: `cover5`,
      backgroundColor: `color5`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
  },
  {
    id: 6,
    name: `name 6`,
    genre: `Crime`,
    runTime: `3h 69m`,
    releaseDate: 1986,
    description: `description 6`,
    director: `director 6`,
    rating: {
      score: 9.9,
      count: 276395,
      assessment: `Very good`,
    },
    source: {
      video: `video6`,
      previewVideo: `previewVideo6`,
    },
    picture: {
      poster: `poster6`,
      preview: `preview6`,
      cover: `cover6`,
      backgroundColor: `color6`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
  },
  {
    id: 7,
    name: `name 7`,
    genre: `Adventure`,
    runTime: `3h 79m`,
    releaseDate: 1987,
    description: `description 7`,
    director: `director 7`,
    rating: {
      score: 9.9,
      count: 276395,
      assessment: `Very good`,
    },
    source: {
      video: `video7`,
      previewVideo: `previewVideo7`,
    },
    picture: {
      poster: `poster7`,
      preview: `preview7`,
      cover: `cover7`,
      backgroundColor: `color7`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
  },
  {
    id: 8,
    name: `name 8`,
    genre: `Crime`,
    runTime: `3h 89m`,
    releaseDate: 1988,
    description: `description 8`,
    director: `director 8`,
    rating: {
      score: 9.9,
      count: 276395,
      assessment: `Very good`,
    },
    source: {
      video: `video8`,
      previewVideo: `previewVideo8`,
    },
    picture: {
      poster: `poster8`,
      preview: `preview8`,
      cover: `cover8`,
      backgroundColor: `color8`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
  },
  {
    id: 9,
    name: `name 9`,
    genre: `Crime`,
    runTime: `3h 99m`,
    releaseDate: 1989,
    description: `description 9`,
    director: `director 9`,
    rating: {
      score: 9.9,
      count: 276395,
      assessment: `Very good`,
    },
    source: {
      video: `video9`,
      previewVideo: `previewVideo9`,
    },
    picture: {
      poster: `poster9`,
      preview: `preview9`,
      cover: `cover9`,
      backgroundColor: `color9`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
    isFavorite: false,
  },
];

const genres = [`Comedies`, `Crime`];

describe(`MainPage`, () => {
  test(`film card should be pressed`, () => {
    const onFilmChoose = jest.fn();
    const mainPage = shallow(
        <Main
          promoFilm={films[0]}
          films={films}
          avatar={avatar}
          onStepChange={() => null}
          step={1}
          genres={genres}
          activeTab={ALL_GENRES}
          onActiveTabChange={() => null}
          authorizationStatus={EAuthorizationStatus.AUTH}
          onFavoriteFilmClick={() => null}
          onStepReset={() => null}
        />
    );
    const mainTitleList = mainPage.find(`a.small-movie-card__link`);
    mainTitleList.forEach((mainTitle) => mainTitle.simulate(`click`));
    expect(onFilmChoose).toHaveBeenCalledTimes(mainTitleList.length);
  });


  test(`add favorite film button should be clicked`, () => {
    const onFavoriteFilmClick = jest.fn();
    const mainPage = shallow(
        <Main
          promoFilm={films[0]}
          films={films}
          avatar={avatar}
          onStepChange={() => null}
          step={1}
          genres={genres}
          activeTab={ALL_GENRES}
          onActiveTabChange={() => null}
          authorizationStatus={EAuthorizationStatus.AUTH}
          onFavoriteFilmClick={onFavoriteFilmClick}
          onStepReset={() => null}
        />
    );
    mainPage.find(`button.movie-card__button`).simulate(`click`);
    expect(onFavoriteFilmClick).toHaveBeenCalledTimes(1);
  });

  test(`should be "show mode" button`, () => {
    const mainPage = mount(
        <MemoryRouter>
          <Main
            promoFilm={films[0]}
            films={films}
            avatar={avatar}
            onStepChange={() => null}
            step={1}
            genres={genres}
            activeTab={ALL_GENRES}
            onActiveTabChange={() => null}
            authorizationStatus={EAuthorizationStatus.AUTH}
            onFavoriteFilmClick={() => null}
            onStepReset={() => null}
          />
        </MemoryRouter>
    );
    const showMoreButton = mainPage.find(`button.catalog__button`);
    expect(showMoreButton).toHaveLength(1);
  });

  test(`shouldn't be "show mode" button`, () => {
    const mainPage = mount(
        <MemoryRouter>
          <Main
            promoFilm={films[0]}
            films={films}
            avatar={avatar}
            onStepChange={() => null}
            step={2}
            genres={genres}
            activeTab={ALL_GENRES}
            onActiveTabChange={() => null}
            authorizationStatus={EAuthorizationStatus.AUTH}
            onFavoriteFilmClick={() => null}
            onStepReset={() => null}
          />
        </MemoryRouter>
    );
    const showMoreButton = mainPage.find(`button.catalog__button`);
    expect(showMoreButton).toHaveLength(0);
  });
});
