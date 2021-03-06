import * as React from "react";
import {Link} from "react-router-dom";

import EAppRoute from "@app/app-route";
import history from "@app/history";
import {EFilmPack, EFilmTab} from "@common/enums";
import {IFilm, IReview} from "@common/types";
import {getColorParams} from "@common/utils";
import FilmList from "@components/film-list/film-list";
import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import Tabs from "@components/tabs/tabs";
import User from "@components/user/user";
import {withLoading} from "@hocs/index";
import {EAuthorizationStatus} from "@store/user/interface";

import Details from "./details/details";
import Overview from "./overview/overview";
import Reviews from "./reviews/reviews";
import {IFilmProps} from "./interface";


const ReviewsWrap = withLoading(Reviews);

const getTab = (activeTab: EFilmTab, info: IFilm, reviews: IReview[]) => {
  const {rating, description, director, starring, genre, runTime, releaseDate, picture} = info;
  switch (activeTab) {
    case EFilmTab.DETAILS:
      return <Details
        genre={genre}
        runTime={runTime}
        releaseDate={releaseDate}
        director={director}
        starring={starring}
      />;
    case EFilmTab.REVIEWS:
      const colors = getColorParams({
        hexColor: picture.backgroundColor,
        offset: 20,
      });
      return <ReviewsWrap
        reviews={reviews}
        separatorColor={colors.RGBAWithOffset}
        loadingParams={[`reviews`]}
      />;
    case EFilmTab.OVERVIEW:
    default:
      return <Overview
        rating={rating}
        description={description}
        director={director}
        starring={starring}
      />;
  }
};

class Film extends React.PureComponent<IFilmProps> {
  public componentDidMount() {
    const {info, onReviewsLoad} = this.props;
    onReviewsLoad(info.id);
  }

  public componentDidUpdate(prevProps) {
    const {info, onReviewsLoad} = this.props;
    if (!prevProps || prevProps.info.id !== info.id) {
      onReviewsLoad(info.id);
    }
  }

  public render() {
    const {
      likedFilms,
      info,
      avatar,
      activeTab,
      tabs,
      reviews,
      baseURI,
      authorizationStatus,
      onFavoriteFilmClick,
    } = this.props;
    const {id, name, genre, releaseDate, picture, isFavorite} = info;

    return <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: picture.backgroundColor}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={picture && picture.cover} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo/>
            <User avatar={avatar || ``} isAuthorized={authorizationStatus === EAuthorizationStatus.AUTH}/>
          </header>

          <div className="movie-card__wrap">
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
                  to={EAppRoute.PLAYER.replace(`:filmId`, `${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </Link>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                  onClick={() => onFavoriteFilmClick(info)}
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
                <Link
                  to={EAppRoute.REVIEW.replace(`:filmId`, `${id}`)}
                  className="btn movie-card__button"
                >
                  Add review
                </Link>
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
                tabs={tabs}
                activeTab={activeTab}
                baseURI={baseURI}
              />
              {getTab(activeTab, info, reviews)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList
            films={likedFilms}
            onCardClick={(filmId: number) => history.push(EAppRoute.FILM.replace(`:filmId`, `${filmId}`))}
            pack={EFilmPack.SMALL}
          />
        </section>
        <Footer/>
      </div>
    </React.Fragment>;
  }
}

export default Film;
