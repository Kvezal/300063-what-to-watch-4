enum EAppRoute {
  ROOT = `/`,
  FILMS = `/films/:filmId`,
  REVIEW = `/films/:filmId/review`,
  LOGIN = `/login`,
  MY_LIST = `/mylist`,
  PLAYER = `/films/:filmId/player`,
}

export default EAppRoute;
