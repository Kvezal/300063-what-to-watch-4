import React from "react";
import render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import {FilmOverviewTabsEnum} from "@common/enums";

import FilmDescription from "./film-description";


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
  },
];

const tabList = [
  {name: `Overview`, id: FilmOverviewTabsEnum.OVERVIEW},
  {name: `Details`, id: FilmOverviewTabsEnum.DETAILS},
  {name: `Reviews`, id: FilmOverviewTabsEnum.REVIEWS},
];

describe(`FilmDescriptionPage`, () => {
  test(`should render component`, () => {
    const tree = render
      .create(
          <MemoryRouter>
            <FilmDescription
              likedFilms={likedFilms}
              onActiveTabChange={() => {}}
              info={likedFilms[0]}
              avatar={avatar}
              onFilmChoose={() => {}}
              renderTabs={() => {}}
              activeTab={`overview`}
              reviews={[]}
              tabList={tabList}
              isAuthorized={true}
            />
          </MemoryRouter>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
