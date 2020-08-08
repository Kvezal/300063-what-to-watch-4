import MockAdapter from "axios-mock-adapter";

import {adaptFilm, adaptReview} from "@common/adapter";
import {IReview} from "@common/types";
import {extend} from "@common/utils";
import createAPI from "@services/api";

import {
  ECommentStatus,
  EDataAction,
  EFavoriteFilmActionType,
  IChangeCommentStatusAction,
  ILoadFavoriteFilmsAction,
  ILoadFilmReviewsAction,
  ILoadFilmsAction,
  IUpdateFilmAction,
  IUpdatePromoFilmAction,
} from "./interface";
import * as ActionCreator from "./action-creator";
import reducer from "./reducer";
import * as Operation from "./operation";


const api = createAPI();

const initialState = {
  films: null,
  promoFilm: null,
  filmReviews: null,
  favoriteFilms: null,
  commentStatus: ECommentStatus.NONE,
};

// imitation of server data before adaptation
/* eslint-disable */
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
  is_favorite: true
};
/* eslint-enable */

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
    backgroundColor: `color3`,
  },
  starring: [
    `Robert De Niro`,
    `James Woods`,
    `Elizabeth McGovern`
  ],
  isFavorite: false,
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

const film = {
  id: 5,
  name: `name 5`,
  genre: `Comedy`,
  runTime: `3h 49m`,
  releaseDate: 1984,
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
  isFavorite: true,
};

const reviews: IReview[] = [
  {
    id: 1,
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    ratingScore: 8.9,
    author: `Kate Muir`,
    date: `December 24, 2016`,
  },
  {

    id: 2,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    ratingScore: 8.0,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
  },
  {
    id: 3,
    text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    ratingScore: 8.0,
    author: `Amanda Greever`,
    date: `November 18, 2015`,
  },
  {
    id: 4,
    text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    ratingScore: 7.2,
    author: `Matthew Lickona`,
    date: `December 20, 2016`,
  },
  {
    id: 5,
    text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    ratingScore: 7.6,
    author: `Paula Fleri-Soler`,
    date: `December 20, 2016`,
  },
  {
    id: 6,
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
        type: EDataAction.LOAD_FILMS,
        payload: films,
      });
  });

  test(`load promo film action should return correct object`, () => {
    expect(ActionCreator.loadPromoFilm(promoFilm))
      .toEqual({
        type: EDataAction.LOAD_PROMO_FILM,
        payload: promoFilm,
      });
  });

  test(`load film reviews action should return correct object`, () => {
    expect(ActionCreator.loadFilmReviews(reviews))
      .toEqual({
        type: EDataAction.LOAD_FILM_REVIEWS,
        payload: reviews,
      });
  });

  test(`load favorite films action should return correct object`, () => {
    expect(ActionCreator.loadFavoriteFilms(films))
      .toEqual({
        type: EDataAction.LOAD_FAVORITE_FILMS,
        payload: films,
      });
  });

  test(`update promo film action should return correct object`, () => {
    expect(ActionCreator.updatePromoFilm(film))
      .toEqual({
        type: EDataAction.UPDATE_PROMO_FILM,
        payload: film,
      });
  });

  test(`update film action should return correct object`, () => {
    expect(ActionCreator.updateFilm(film))
      .toEqual({
        type: EDataAction.UPDATE_FILM,
        payload: film,
      });
  });

  test(`should set films`, () => {
    const loadFilmsAction: ILoadFilmsAction = {
      type: EDataAction.LOAD_FILMS,
      payload: films,
    };
    expect(reducer(initialState, loadFilmsAction))
      .toEqual(extend(initialState, {
        films,
      }));
  });

  test(`should set filmReviews`, () => {
    const loadFilmReviewsAction: ILoadFilmReviewsAction = {
      type: EDataAction.LOAD_FILM_REVIEWS,
      payload: reviews,
    };
    expect(reducer(initialState, loadFilmReviewsAction))
      .toEqual(extend(initialState, {
        filmReviews: reviews,
      }));
  });

  test(`should set favoriteFilms`, () => {
    const loadFavoriteFilmsAction: ILoadFavoriteFilmsAction = {
      type: EDataAction.LOAD_FAVORITE_FILMS,
      payload: films,
    };
    expect(reducer(initialState, loadFavoriteFilmsAction))
      .toEqual(extend(initialState, {
        favoriteFilms: films,
      }));
  });

  test.each([
    ECommentStatus.ERROR,
    ECommentStatus.POSTING,
    ECommentStatus.NONE
  ])(`should set commentStatus %p`, (status) => {
    const changeCommentPostingStatusAction: IChangeCommentStatusAction = {
      type: EDataAction.CHANGE_COMMENT_STATUS,
      payload: status,
    };
    expect(reducer(initialState, changeCommentPostingStatusAction))
      .toEqual(extend(initialState, {
        commentStatus: status,
      }));
  });

  test(`should update a film into films`, () => {
    const state = extend(initialState, {
      films: [film]
    });
    const updatedFilm = extend(film, {
      description: `updated`,
    });
    const updateFilmAction: IUpdateFilmAction = {
      type: EDataAction.UPDATE_FILM,
      payload: updatedFilm,
    };
    expect(reducer(state, updateFilmAction))
      .toEqual(extend(initialState, {
        films: [updatedFilm],
      }));
  });

  test(`shouldn't update a film into films`, () => {
    const state = extend(initialState, {
      films: [film]
    });
    const updatedFilm = extend(film, {
      id: 10,
      description: `updated`,
    });
    const updateFilmAction: IUpdateFilmAction = {
      type: EDataAction.UPDATE_FILM,
      payload: updatedFilm,
    };
    expect(reducer(state, updateFilmAction))
      .toEqual(extend(initialState, {
        films: [film],
      }));
  });

  test(`should update promoFilm`, () => {
    const state = extend(initialState, {
      promoFilm: film
    });
    const updatedFilm = extend(film, {
      description: `updated`,
    });
    const updatePromoFilmAction: IUpdatePromoFilmAction = {
      type: EDataAction.UPDATE_PROMO_FILM,
      payload: updatedFilm,
    };
    expect(reducer(state, updatePromoFilmAction))
      .toEqual(extend(initialState, {
        promoFilm: updatedFilm,
      }));
  });

  test(`shouldn't update promoFilm`, () => {
    const state = extend(initialState, {
      promoFilm: film
    });
    const updatedFilm = extend(film, {
      id: 10,
      description: `updated`,
    });
    const updatePromoFilmAction: IUpdatePromoFilmAction = {
      type: EDataAction.UPDATE_PROMO_FILM,
      payload: updatedFilm,
    };
    expect(reducer(state, updatePromoFilmAction))
      .toEqual(extend(initialState, {
        promoFilm: film,
      }));
  });

  test(`should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock.onGet(`/films`)
      .reply(200, [filmFromServer]);

    return filmsLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: EDataAction.LOAD_FILMS,
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

    promoFilmLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: EDataAction.LOAD_PROMO_FILM,
          payload: adaptFilm(filmFromServer),
        });
      });
  });

  test(`should make a correct API call to /comments/:filmId`, () => {
    const filmId = 1;
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmReviewLoader = Operation.loadFilmReviews(filmId);

    apiMock.onGet(`/comments/${filmId}`)
      .reply(200, [filmReviewFromServer]);

    filmReviewLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: EDataAction.LOAD_FILM_REVIEWS,
          payload: [adaptReview(filmReviewFromServer)],
        });
      });
  });

  test(`should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmLoader = Operation.loadFavoriteFilms();

    apiMock.onGet(`/favorite`)
      .reply(200, [filmFromServer]);

    favoriteFilmLoader(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: EDataAction.LOAD_FAVORITE_FILMS,
          payload: [adaptFilm(filmFromServer)],
        });
      });
  });

  test(`should make a correct API call to /favorite/:filmId/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmStatusChanger = Operation.changeFavoriteFilmStatus(3, EFavoriteFilmActionType.ADD);

    apiMock.onPost(`/favorite/3/${EFavoriteFilmActionType.ADD}`)
      .reply(200, filmFromServer);

    const adaptedFilm = adaptFilm(filmFromServer);

    favoriteFilmStatusChanger(dispatch, () => null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith([
          {
            type: EDataAction.UPDATE_FILM,
            payload: adaptedFilm,
          }, {
            type: EDataAction.UPDATE_PROMO_FILM,
            payload: adaptedFilm,
          }
        ]);
      });
  });
});
