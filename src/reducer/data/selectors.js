import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME_SPACE].films;
};

const getFilteredFilmsByGenre = (state) => {
  return state[NAME_SPACE].films
    .filter((film) => film.genre === state.genre);
};

const getFilmById = (state) => {
  return state[NAME_SPACE].films
    .find((film) => film.genre === state.currentFilmId);
};

export {getFilms, getFilteredFilmsByGenre, getFilmById};
