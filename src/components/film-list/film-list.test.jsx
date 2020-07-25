import React from "react";
import render from "react-test-renderer";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmList from "./film-list";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmListComponent`, () => {
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

  test(`should render component`, () => {
    const tree = render
      .create(
          <FilmList list={films} onCardClick={() => {}}/>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const filmListComponent = mount(<FilmList list={films} onCardClick={() => {}}/>);
    const list = filmListComponent.find(`div.catalog__movies-list`);
    expect(list).toHaveLength(1);
  });

  test(`should have film cards`, () => {
    const filmListComponent = mount(<FilmList list={films} onCardClick={() => {}}/>);
    const cards = filmListComponent.find(`article.small-movie-card`);
    expect(cards).toHaveLength(films.length);
  });

  test(`should have cards limit`, () => {
    const pack = 2;
    const filmListComponent = mount(
        <FilmList
          list={films}
          onCardClick={() => {}}
          pack={pack}
        />
    );
    const cards = filmListComponent.find(`article.small-movie-card`);
    expect(cards).toHaveLength(pack);
  });

  test(`should have cards limit`, () => {
    const pack = 2;
    const step = 2;
    const filmListComponent = mount(
        <FilmList
          list={films}
          onCardClick={() => {}}
          pack={pack}
          step={step}
        />
    );
    const cards = filmListComponent.find(`article.small-movie-card`);
    expect(cards).toHaveLength(pack * step);
  });
});
