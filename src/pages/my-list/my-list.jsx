import React from "react";
import PropTypes from "prop-types";

import AppRoute from "@app/app-route";
import history from "@app/history";
import {filmType} from "@common/types";
import FilmList from "@components/film-list/film-list";
import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import User from "@components/user/user";
import {AuthorizationStatus} from "@store/user/const";

const MyList = (props) => {
  const {authorizationStatus, avatar, films} = props;
  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">My list</h1>
      <User
        isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
        avatar={avatar}
      />
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmList
        list={films}
        onCardClick={(filmId) => history.push(AppRoute.FILMS.replace(`:filmId`, filmId))}
      />
    </section>

    <Footer/>
  </div>;
};

MyList.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  films: PropTypes.arrayOf(
      PropTypes.shape(filmType)
  ).isRequired,
};

export default MyList;
