import React from "react";
import renderer from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import Main from "./main";


describe(`MainPage`, () => {
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

  const filmFilters = [
    {name: `All genres`, id: `All genres`},
    {name: `Comedies`, id: `Comedy`},
    {name: `Crime`, id: `Crime`}
  ];

  test(`should match to snapshot`, () => {
    const tree = renderer
      .create(
          <MemoryRouter>
            <Main
              promoFilm={films[0]}
              genre=""
              onFilterClick={() => {}}
              films={films}
              avatar={avatar}
              onFilmChoose={() => {}}
              chooseFilmsWithGenre={() => {}}
              onStepChange={() => {}}
              step={1}
              tabList={filmFilters}
              activeTab={filmFilters[0].id}
              onActiveTabChange={() => {}}
            />
          </MemoryRouter>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
