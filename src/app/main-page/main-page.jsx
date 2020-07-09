import React from "react";
import PropTypes from "prop-types";

import filmListType from "@types/film-list";
import Header from "@components/header";
import FilmList from "@components/film-list";
import Footer from "@components/footer";
import FilmFilter from "@components/film-filter";
import ButtonMore from "@components/button-more";


const FILM_COUNT_IN_ONE_STEP = 8;

const MainPage = (props) => {
  const {promoFilm, films, avatar, onCardClick, onStepChange, step, tabList, activeTab, onActiveTabChange} = props;
  const {genres, releaseDate, name, picture} = promoFilm;

  return <React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={picture.cover} alt={name}/>
      </div>

      <Header avatar={avatar}/>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={picture.poster} alt={name} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genres}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
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
          onItemClick={onActiveTabChange}
          activeItem={activeTab}
        />

        <FilmList
          list={films}
          onCardClick={onCardClick}
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
  </React.Fragment>;
};

MainPage.propTypes = {
  promoFilm: PropTypes.shape().isRequired,
  films: filmListType.isRequired,
  avatar: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onStepChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  tabList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
};

export default MainPage;
