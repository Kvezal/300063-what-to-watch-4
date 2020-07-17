import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";
import configureStore from 'redux-mock-store';

import {GenreEnum} from "@common/enums";
import NameSpace from "@store/name-space";
import {AuthorizationStatus} from "@store/user/const";

import App from "./app";


const mockStore = configureStore([]);

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
      backgroundColor: `color1`,
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
      cover: `cover2`,
      backgroundColor: `color2`,
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
      backgroundColor: `color3`,
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
  }
];

describe(`App`, () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      [NameSpace.DATA]: {
        genre: GenreEnum.All,
        films,
        promoFilm: films[0],
        currentFilmId: 1,
        reviews,
        notifications: [],
      },
      [NameSpace.USER]: {
        authorizationStatus: AuthorizationStatus.AUTH,
      }
    });
  });

  it(`should match to snapshot`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <App/>
            </MemoryRouter>
          </Provider>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
