import React from "react";
import {Switch, Route, Router} from "react-router-dom";

import AppRoute from "@app/app-route";
import history from "@app/history";
import AddReview from "@containers/add-review";
import FilmDescription from "@containers/film-description";
import Main from "@containers/main";
import Player from "@containers/player";
import SignIn from "@containers/sign-in";
import {EFilmOverviewTab, EGenre} from "@common/enums";
import {withActiveFlag, withActiveTab, withNotifications, withStep} from "@common/hocs";


const MainWrapper = withNotifications(withActiveTab(withStep(Main)));
const FilmDescriptionWrapper = withNotifications(withActiveTab(FilmDescription));
const PlayerWrapper = withNotifications(withActiveFlag(Player));

const App = () => {
  const filmDescriptionTabList = [
    {name: `Overview`, id: EFilmOverviewTab.OVERVIEW},
    {name: `Details`, id: EFilmOverviewTab.DETAILS},
    {name: `Reviews`, id: EFilmOverviewTab.REVIEWS},
  ];

  const filmFilters = [
    {name: `All genres`, id: EGenre.ALL},
    {name: `Comedies`, id: EGenre.COMEDY},
    {name: `Crime`, id: EGenre.CRIME},
    {name: `Documentary`, id: EGenre.DOCUMENTARY},
    {name: `Dramas`, id: EGenre.DRAMA},
    {name: `Horror`, id: EGenre.HORROR},
    {name: `Kids & Family`, id: EGenre.KIDS_AND_FAMILY},
    {name: `Romance`, id: EGenre.ROMANCE},
    {name: `Sci-Fi`, id: EGenre.SCI_FI},
    {name: `Thrillers`, id: EGenre.THRILLER}
  ];

  return <Router history={history}>
    <Switch>
      <Route exact path={AppRoute.ROOT} render={() => {
        return <MainWrapper
          tabList={filmFilters}
          activeTab={EGenre.ALL}
        />;
      }}/>
      <Route exact path={AppRoute.PLAYER} render={(props) =>
        <PlayerWrapper
          muted={false}
          isActive={true}
          {...props}
        />
      }/>
      <Route exact path={AppRoute.LOGIN} render={() => <SignIn/>}/>
      <Route exact path={AppRoute.REVIEW} render={() => <AddReview/>}/>
      <Route exact path={AppRoute.FILMS} render={(props) =>
        <FilmDescriptionWrapper
          baseTab="overview"
          tabList={filmDescriptionTabList}
          activeTab={EFilmOverviewTab.OVERVIEW}
          {...props}
        />}/>
    </Switch>
  </Router>;
};

export default App;
