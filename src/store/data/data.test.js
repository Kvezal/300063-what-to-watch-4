import MockAdapter from "axios-mock-adapter";

import {adaptFilm, adaptReview} from "@common/adapter";
import {extend} from "@common/utils";
import {GenreEnum} from "@common/enums";
import createAPI from "@services/api";
import NameSpace from "@store/name-space";

import {ActionType, ActionCreator, reducer, Operation} from "./data";


const api = createAPI(() => {});

const initialState = {
  genre: GenreEnum.ALL,
  films: [],
  promoFilm: null,
  currentFilmId: 1,
  notifications: [],
};

const filmFromServer = {
  id: 3,
  name: `name 3`,
  poster_image: `poster3`,
  preview_image: `preview3`,
  background_image: `cover3`,
  background_color: `color3`,
  video_link: `video3`,
  preview_video_link: `previewVideo3`,
  description: `description 3`,
  rating: 9.9,
  scores_count: 276395,
  director: `director 3`,
  starring: [`Robert De Niro`, `James Woods`, `Elizabeth McGovern`],
  run_time: 229,
  genre: `Crime`,
  released: 1984,
  is_favorite: false
};

const filmReviewFromServer = {
  id: 1,
  user: {
    id: 4,
    name: `userName4`
  },
  rating: 8.9,
  comment: `comment1`,
  date: `2019-05-08T14:13:56.569Z`,
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
    preview: `preview3`,
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

const reviews = [
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    ratingScore: 8.9,
    author: `Kate Muir`,
    date: `December 24, 2016`,
  },
  {
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    ratingScore: 8.0,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
  },
  {
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    ratingScore: 8.0,
    author: `Amanda Greever`,
    date: `November 18, 2015`,
  },
  {
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    ratingScore: 7.2,
    author: `Matthew Lickona`,
    date: `December 20, 2016`,
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    ratingScore: 7.6,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
  },
  {
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    ratingScore: 7.0,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
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

  test(`choose genre action should return correct object`, () => {
    const genre = `test`;
    expect(ActionCreator.chooseGenre(genre))
      .toEqual({
        type: ActionType.CHOOSE_GENRE,
        payload: genre,
      });
  });

  test(`choose film id action should return correct object`, () => {
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

  test(`load film reviews action should return correct object`, () => {
    expect(ActionCreator.loadFilmReviews(reviews))
      .toEqual({
        type: ActionType.LOAD_FILM_REVIEWS,
        payload: reviews,
      });
  });

  test(`add server error action should return correct object`, () => {
    const error = {
      id: `test-id`,
      type: `error`,
      title: `title`,
      text: `text`,
      httpCode: 500,
    };
    expect(ActionCreator.addErrorNotification(error))
      .toEqual({
        type: ActionType.ADD_ERROR_NOTIFICATION,
        payload: error,
      });
  });

  test(`remove notification action should return correct object`, () => {
    const notificationId = `test-id`;
    expect(ActionCreator.removeNotification(notificationId))
      .toEqual({
        type: ActionType.REMOVE_NOTIFICATION,
        payload: notificationId,
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

  test(`should set filmReviews`, () => {
    const state = extend(initialState, {
      filmReviews: reviews,
    });
    const loadFilmReviewsAction = {
      type: ActionType.LOAD_FILM_REVIEWS,
      payload: reviews,
    };
    expect(reducer(state, loadFilmReviewsAction))
      .toEqual(extend(state, {
        filmReviews: reviews,
      }));
  });

  test(`should add new notification`, () => {
    const notification = {
      id: `test-id-1`,
      type: `error`,
      title: `title 1`,
      text: `text 1`,
      httpCode: 500,
    };
    const addErrorNotificationAction = {
      type: ActionType.ADD_ERROR_NOTIFICATION,
      payload: notification,
    };
    expect(reducer(initialState, addErrorNotificationAction))
      .toEqual(extend(initialState, {
        notifications: [notification],
      }));
  });

  test(`should remove notification`, () => {
    const notificationId = `test-id-1`;
    const state = extend(initialState, {
      notifications: [
        {
          id: notificationId,
          type: `error`,
          title: `title 1`,
          text: `text 1`,
          httpCode: 500,
        }
      ],
    });
    const removeNotificationAction = {
      type: ActionType.REMOVE_NOTIFICATION,
      payload: notificationId,
    };
    expect(reducer(state, removeNotificationAction))
      .toEqual(extend(state, {
        notifications: [],
      }));
  });

  test(`should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = Operation.loadFilms();

    apiMock.onGet(`/films`)
      .reply(200, [filmFromServer]);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_FILMS,
          payload: [adaptFilm(filmFromServer)],
        });
      });
  });

  test(`should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.loadPromoFilm();

    apiMock.onGet(`/films/promo`)
      .reply(200, filmFromServer);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_PROMO_FILM,
          payload: adaptFilm(filmFromServer),
        });
      });
  });

  test(`should make a correct API call to /comments/:filmId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmReviewLoader = Operation.loadFilmReviews();

    apiMock.onGet(`/comments/1`)
      .reply(200, [filmReviewFromServer]);

    return filmReviewLoader(dispatch, () => ({
      [NameSpace.DATA]: {
        currentFilmId: 1,
      }
    }), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_FILM_REVIEWS,
          payload: [adaptReview(filmReviewFromServer)],
        });
      });
  });
});
