import * as React from "react";

import EAppRoute from "@app/app-route";
import history from "@app/history";
import FilmList from "@components/film-list/film-list";
import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import User from "@components/user/user";
import {EAuthorizationStatus} from "@store/user/interface";

import {IMyListProps} from "./interface";


const MyList: React.FC<IMyListProps> = (props: IMyListProps) => {
  const {authorizationStatus, avatar, films} = props;
  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">My list</h1>
      <User
        isAuthorized={authorizationStatus === EAuthorizationStatus.AUTH}
        avatar={avatar}
      />
    </header>

    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <FilmList
        films={films}
        onCardClick={(filmId: number) => history.push(EAppRoute.FILM.replace(`:filmId`, `${filmId}`))}
      />
    </section>

    <Footer/>
  </div>;
};

export default MyList;
