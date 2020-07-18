import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import AddReview from "@containers/add-review";
import FilmDescription from "@containers/film-description";
import Main from "@containers/main";
import NotificationList from "@containers/notification-list";
import Player from "@containers/player";
import SignIn from "@containers/sign-in";
import {FilmOverviewTabsEnum} from "@common/enums";
import {withActiveFlag, withActiveTab, withStep} from "@common/hocs";


const MainWrapper = withActiveTab(withStep(Main));
const FilmDescriptionWrapper = withActiveTab(FilmDescription);
const PlayerWrapper = withActiveFlag(Player);

const App = () => {
  const filmDescriptionTabList = [
    {name: `Overview`, id: FilmOverviewTabsEnum.OVERVIEW},
    {name: `Details`, id: FilmOverviewTabsEnum.DETAILS},
    {name: `Reviews`, id: FilmOverviewTabsEnum.REVIEWS},
  ];

  const filmFilters = [
    {name: `All genres`, id: `All genres`},
    {name: `Comedies`, id: `Comedy`},
    {name: `Crime`, id: `Crime`},
    {name: `Documentary`, id: `Documentary`},
    {name: `Dramas`, id: `Drama`},
    {name: `Horror`, id: `Horror`},
    {name: `Kids & Family`, id: `Kids & Family`},
    {name: `Romance`, id: `Romance`},
    {name: `Sci-Fi`, id: `Sci-Fi`},
    {name: `Thrillers`, id: `Thriller`}
  ];

  return <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainWrapper
          avatar="avatar.jpg"
          tabList={filmFilters}
          activeTab={filmFilters[0].id}
        />
      </Route>
      <Route exact path="/films">
        <FilmDescriptionWrapper
          avatar="avatar.jpg"
          baseTab="overview"
          tabList={filmDescriptionTabList}
          activeTab={filmDescriptionTabList[0].id}
        />
      </Route>
      <Route exact path="/player">
        <PlayerWrapper
          muted={false}
          isActive={true}
        />
      </Route>
      <Route exact path="/login">
        <SignIn/>
      </Route>
      <Route exact path="/dev-review">
        <AddReview/>
      </Route>
    </Switch>
    <NotificationList/>
  </BrowserRouter>;
};

export default App;
