import * as React from "react";
import {Link} from "react-router-dom";

import EAppRoute from "@app/app-route";
import history from "@app/history";
import ButtonMore from "@components/button-more/button-more";
import FilmFilter from "@components/film-filter/film-filter";
import FilmList from "@components/film-list/film-list";
import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import User from "@components/user/user";
import {EAuthorizationStatus} from "@store/user/interface";

import {IMainProps} from "./interface";
import {ALL_GENRES, MAX_GENRE_COUNT} from "@common/consts";
import {EFilmPack} from "@common/enums";


const Main: React.FunctionComponent<IMainProps> = (props: IMainProps) => {
  const {
    authorizationStatus,
    genres,
    activeTab,
    step,
    promoFilm,
    films,
    avatar,
    onStepChange,
    onStepReset,
    onFavoriteFilmClick,
    baseURI,
  } = props;
  const {id: promoFilmId, genre, releaseDate, name, picture, isFavorite} = promoFilm;

  const filmFilters = [ALL_GENRES].concat(genres.slice(0, MAX_GENRE_COUNT));

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={picture.cover} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo/>
        <User avatar={avatar} isAuthorized={authorizationStatus === EAuthorizationStatus.AUTH}/>
      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={picture.poster} alt={name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                className="btn btn--play movie-card__button"
                type="button"
                to={EAppRoute.PLAYER.replace(`:filmId`, `${promoFilmId}`)}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </Link>
              {authorizationStatus === EAuthorizationStatus.AUTH && (
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => onFavoriteFilmClick(promoFilm)}
                >
                  {isFavorite
                    ? <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"/>
                    </svg>
                    : <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"/>
                    </svg>
                  }
                  <span>My list</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmFilter
          tabs={filmFilters}
          baseURI={baseURI}
          onItemClick={onStepReset}
          activeItem={activeTab}
        />

        <FilmList
          films={films}
          onCardClick={(filmId: number) => history.push(EAppRoute.FILM.replace(`:filmId`, `${filmId}`))}
          pack={EFilmPack.BIG}
          step={step}
        />

        <ButtonMore
          hide={films.length <= EFilmPack.BIG * step}
          onButtonClick={onStepChange}
        >
          Show more
        </ButtonMore>
      </section>

      <Footer/>
    </div>
  </React.Fragment>;
};

export default Main;
