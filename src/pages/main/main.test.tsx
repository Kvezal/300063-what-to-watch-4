import * as React from "react";
import * as renderer from "react-test-renderer";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {MemoryRouter} from "react-router-dom";

import {ALL_GENRES} from "@common/consts";
import {EAuthorizationStatus} from "@store/user/interface";

import Main from "./main";


const avatar = `avatar.jpg`;
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

const filmFilters = [`All genres`, `Comedies`, `Crime`];

configure({
  adapter: new Adapter(),
});

describe(`MainPage`, () => {
  test(`should match to snapshot`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Main
              promoFilm={films[0]}
              films={films}
              avatar={avatar}
              onStepChange={() => null}
              step={1}
              tabList={filmFilters}
              activeTab={ALL_GENRES}
              onActiveTabChange={() => null}
              authorizationStatus={EAuthorizationStatus.AUTH}
              onFavoriteFilmClick={() => null}
              onStepReset={() => null}
            />
          </MemoryRouter>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`card titles should be pressed`, () => {
    const onFilmChoose = jest.fn();
    const mainPage = shallow(
        <Main
          promoFilm={films[0]}
          films={films}
          avatar={avatar}
          onStepChange={() => null}
          step={1}
          tabList={filmFilters}
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


  test(`add favorite list button should be clicked`, () => {
    const onFavoriteFilmClick = jest.fn();
    const mainPage = shallow(
        <Main
          promoFilm={films[0]}
          films={films}
          avatar={avatar}
          onStepChange={() => null}
          step={1}
          tabList={filmFilters}
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
});
