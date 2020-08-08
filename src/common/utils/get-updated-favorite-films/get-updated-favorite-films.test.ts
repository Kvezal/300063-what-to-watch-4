import getUpdatedFavoriteFilms from "./get-updated-favorite-films";


const film = {
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
  isFavorite: true,
};

describe(`getUpdatedFavoriteFilms`, () => {
  test(`should add a film if it's not in the list`, () => {
    expect(getUpdatedFavoriteFilms([], film)).toEqual([film]);
  });

  test(`should update a film if it's in the list`, () => {
    const updatedFilm = {
      id: 1,
      name: `name`,
      genre: `Comedy`,
      runTime: `1m`,
      releaseDate: 1984,
      description: `test`,
      director: `test`,
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
      isFavorite: true,
    };
    expect(getUpdatedFavoriteFilms([film], updatedFilm)).toEqual([updatedFilm]);
  });

  test(`should delete a film if isFavorite flag equal "false"`, () => {
    const unfavoriteFilm = {
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
    };
    expect(getUpdatedFavoriteFilms([film], unfavoriteFilm)).toEqual([]);
  });
});
