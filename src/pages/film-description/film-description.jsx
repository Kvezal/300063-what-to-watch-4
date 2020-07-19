import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import FilmList from "@components/film-list/film-list";
import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import Tabs from "@components/tabs/tabs";
import User from "@components/user/user";
import {FilmOverviewTabsEnum} from "@common/enums";
import {filmType, reviewType} from "@common/types";
import {getColorParams} from "@common/utils";

import Details from "./details/details";
import Overview from "./overview/overview";
import Reviews from "./reviews/reviews";


const getTab = (activeTab, info, reviews) => {
  const {rating, description, director, starring, genre, runTime, releaseDate, picture} = info;
  switch (activeTab) {
    case FilmOverviewTabsEnum.DETAILS:
      return <Details
        genre={genre}
        runTime={runTime}
        releaseDate={releaseDate}
        director={director}
        starring={starring}
      />;
    case FilmOverviewTabsEnum.REVIEWS:
      const colors = getColorParams({
        hexColor: picture.backgroundColor,
        offset: 20,
      });
      return <Reviews list={reviews} separatorColor={colors.RGBAWithOffset}/>;
    case FilmOverviewTabsEnum.OVERVIEW:
    default:
      return <Overview
        rating={rating}
        description={description}
        director={director}
        starring={starring}
      />;
  }
};

const FilmDescription = (props) => {
  const {likedFilms, info, avatar, onFilmChoose, activeTab, tabList, reviews, onActiveTabChange, isAuthorized} = props;
  if (!info) {
    return null;
  }
  const {name, genre, releaseDate, picture} = info;

  return <Fragment>
    <section className="movie-card movie-card--full" style={{backgroundColor: picture.backgroundColor}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={picture && picture.cover} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <Logo/>
          <User avatar={avatar} isAuthorized={isAuthorized}/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <Link className="btn btn--play movie-card__button" type="button" to="/player">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </Link>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
              {isAuthorized && <Link to="/dev-review" className="btn movie-card__button">Add review</Link>}
            </div>
          </div>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img
              src={picture && picture.poster}
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <Tabs
              list={tabList}
              activeTab={activeTab}
              onActiveTabChange={onActiveTabChange}
            />
            {getTab(activeTab, info, reviews)}
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <FilmList list={likedFilms} onCardClick={onFilmChoose}/>
      </section>
      <Footer/>
    </div>
  </Fragment>;
};

FilmDescription.propTypes = {
  info: PropTypes.shape(filmType),
  likedFilms: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ).isRequired,
  avatar: PropTypes.string.isRequired,
  tabList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onActiveTabChange: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewType)
  ).isRequired,
  onFilmChoose: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
};

export default FilmDescription;
