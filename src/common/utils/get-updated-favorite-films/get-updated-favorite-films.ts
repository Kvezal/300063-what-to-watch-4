import {IFilm} from "@common/types";


const getUpdatedFavoriteFilms = (filmList: IFilm[], film: IFilm): IFilm[] => {
  if (!film.isFavorite) {
    return filmList.filter((favoriteFilm) => favoriteFilm.id !== film.id);
  }
  const hasFilm = filmList.some((item: IFilm) => item.id === (film as IFilm).id);
  if (hasFilm) {
    return filmList.map((item: IFilm) => item.id === (film as IFilm).id ? film : item);
  }
  return filmList.concat(film as IFilm);
};

export default getUpdatedFavoriteFilms;
