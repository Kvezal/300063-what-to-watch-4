import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import AppRoute from "@app/app-route";
import history from "@app/history";
import {filmType} from "@common/types";
import ButtonMore from "@components/button-more/button-more";
import FilmFilter from "@components/film-filter/film-filter";
import FilmList from "@components/film-list/film-list";
import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import User from "@components/user/user";


const FILM_COUNT_IN_ONE_STEP = 8;

const Main = (props) => {
  const {
    isAuthorized,
    tabList,
    activeTab,
    step,
    promoFilm,
    films,
    avatar,
    onActiveTabChange,
    onStepChange,
    onStepReset,
    onFilmsWithGenreChoose,
    onFavoriteFilmClick,
  } = props;
  const {id: promoFilmId, genre, releaseDate, name, picture} = promoFilm;

  return <Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={picture.cover} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header movie-card__head">
        <Logo/>
        <User avatar={avatar} isAuthorized={isAuthorized}/>
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
                to={AppRoute.PLAYER.replace(`:filmId`, promoFilmId)}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </Link>
              {isAuthorized && (
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => onFavoriteFilmClick(promoFilm)}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
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
          list={tabList}
          onItemClick={(id) => {
            onActiveTabChange(id);
            onFilmsWithGenreChoose(id);
            onStepReset();
          }}
          activeItem={activeTab}
        />

        <FilmList
          list={films}
          onCardClick={(filmId) => history.push(AppRoute.FILMS.replace(`:filmId`, filmId))}
          pack={FILM_COUNT_IN_ONE_STEP}
          step={step}
        />

        <ButtonMore
          hide={films.length <= FILM_COUNT_IN_ONE_STEP * step}
          onButtonClick={onStepChange}
        >
          Show more
        </ButtonMore>
      </section>

      <Footer/>
    </div>
  </Fragment>;
};

Main.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  tabList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  promoFilm: PropTypes.shape(filmType).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ).isRequired,
  avatar: PropTypes.string,
  onActiveTabChange: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
  onStepReset: PropTypes.func.isRequired,
  onFilmsWithGenreChoose: PropTypes.func.isRequired,
  onFavoriteFilmClick: PropTypes.func.isRequired,
};

export default Main;
