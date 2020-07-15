import {extend} from "@common/utils";
import {GenreEnum} from "@common/enums";

import {ActionType, ActionCreator, reducer} from "./data";


const initialState = {
  genre: GenreEnum.ALL,
  films: [],
  promoFilm: null,
  currentFilmId: null,
};

const promoFilm = {
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
    cover: `cover3`,
    color: `color3`,
  },
  starring: [
    `Robert De Niro`,
    `James Woods`,
    `Elizabeth McGovern`
  ],
};

const films = [
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
    genre: `Drama`,
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
    genre: `Comedy`,
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

describe(`DataReducer`, () => {
  test(`load films action should return correct object`, () => {
    expect(ActionCreator.loadFilms(films))
      .toEqual({
        type: ActionType.LOAD_FILMS,
        payload: films,
      });
  });

  test(`load films action should return correct object`, () => {
    const genre = `test`;
    expect(ActionCreator.chooseGenre(genre))
      .toEqual({
        type: ActionType.CHOOSE_GENRE,
        payload: genre,
      });
  });

  test(`choose film action should return correct object`, () => {
    const filmId = 10;
    expect(ActionCreator.chooseFilmId(filmId))
      .toEqual({
        type: ActionType.CHOOSE_FILM_ID,
        payload: filmId,
      });
  });

  test(`load promo film action should return correct object`, () => {
    expect(ActionCreator.loadPromoFilm(promoFilm))
      .toEqual({
        type: ActionType.LOAD_PROMO_FILM,
        payload: promoFilm,
      });
  });

  test(`should return base state if action type is incorrect`, () => {
    const incorrectAction = {
      type: `test`,
      payload: null,
    };
    expect(reducer(initialState, incorrectAction)).toEqual(initialState);
  });

  test(`should set films`, () => {
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };
    expect(reducer(initialState, loadFilmsAction))
      .toEqual(extend(initialState, {
        films,
      }));
  });

  test(`should set genre`, () => {
    const genre = GenreEnum.DRAMA;
    const chooseGenreAction = {
      type: ActionType.CHOOSE_GENRE,
      payload: genre,
    };
    expect(reducer(initialState, chooseGenreAction))
      .toEqual(extend(initialState, {
        genre,
      }));
  });

  test(`should set currentFilmId`, () => {
    const filmId = 2;
    const state = extend(initialState, {
      films,
    });
    const chooseFilmAction = {
      type: ActionType.CHOOSE_FILM_ID,
      payload: filmId,
    };
    expect(reducer(state, chooseFilmAction))
      .toEqual(extend(state, {
        currentFilmId: filmId,
      }));
  });
});
