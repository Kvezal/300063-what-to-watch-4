import React, {Fragment} from "react";
import PropTypes from "prop-types";

import filmListType from "@types/film-list";
import Header from "@components/header";
import FilmList from "@components/film-list";
import Footer from "@components/footer";


const FilmOverview = (props) => {
  const {likedFilms, info, avatar} = props;
  const {name, genres, releaseDate, picture, rating, descriptions, director, starring} = info;

  return <Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={`img/${picture.cover}`} alt={name}/>
        </div>

        <Header avatar={avatar}/>

        <div className="movie-card__wrap">
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
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img
              src={`img/${picture.poster}`}
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{rating.score}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{rating.level}</span>
                <span className="movie-rating__count">{rating.count} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">
              {descriptions.map((item, index) => <p key={index}>{item}</p>)}
              <p className="movie-card__director"><strong>Director: {director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmList list={likedFilms}/>
      </section>
      <Footer/>
    </div>
  </Fragment>;
};

FilmOverview.propTypes = {
  likedFilms: filmListType.isRequired,
  avatar: PropTypes.string.isRequired,
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    releaseDate: PropTypes.number.isRequired,
    picture: PropTypes.shape({
      cover: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.shape({
      count: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }).isRequired,
    director: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    starring: PropTypes.string.isRequired,
  }).isRequired,
};

export default FilmOverview;
