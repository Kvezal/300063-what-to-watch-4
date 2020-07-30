import * as React from "react";
import {Switch, Route, Router} from "react-router-dom";

import AppRoute from "@app/app-route";
import history from "@app/history";
import {EFilmTab, EGenre} from "@common/enums";
import {withActiveTab, withNotifications, withStep} from "@hocs/index";
import AddReview from "@containers/add-review";
import Film from "@containers/film";
import Main from "@containers/main";
import Player from "@containers/player";
import PrivateRoute from "@containers/private-route";
import SignIn from "@containers/sign-in";
import MyList from "@containers/my-list";
import {EUserErrorNotificationName} from "@store/user/interface";


const AddReviewWrapper = withNotifications(AddReview);
const FilmWrapper = withNotifications(withActiveTab(Film));
const MainWrapper = withNotifications(withActiveTab(withStep(Main)));
const MyListWrapper = withNotifications(MyList);
const PlayerWrapper = withNotifications(Player);

const App = () => {
  const filmDescriptionTabList = [
    {name: `Overview`, id: EFilmTab.OVERVIEW},
    {name: `Details`, id: EFilmTab.DETAILS},
    {name: `Reviews`, id: EFilmTab.REVIEWS},
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
      <Route exact path={AppRoute.ROOT} render={(props) => {
        return <MainWrapper
          tabList={filmFilters}
          activeTab={EGenre.ALL}
          loadingParams={[`promoFilm`, `films`, `authorizationStatus`]}
          {...props}
        />;
      }}/>
      <Route exact path={AppRoute.PLAYER} render={(props) =>
        <PlayerWrapper
          muted={false}
          isPlaying={true}
          loadingParams={[`source`, `poster`]}
          {...props}
        />
      }/>
      <Route exact path={AppRoute.LOGIN} render={() =>
        <SignIn
          initialFormState={{
            email: ``,
            password: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[`authorizationStatus`]}
          notificationName={EUserErrorNotificationName.EMAIL}
        />
      }/>
      <PrivateRoute exact path={AppRoute.REVIEW} render={(props) =>
        <AddReviewWrapper
          initialFormState={{
            rating: `0`,
            comment: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[`film`]}
          {...props}
        />}
      />
      <Route exact path={AppRoute.FILMS} render={(props) =>
        <FilmWrapper
          tabList={filmDescriptionTabList}
          activeTab={EFilmTab.OVERVIEW}
          loadingParams={[`info`, `likedFilms`]}
          {...props}
        />}
      />
      <PrivateRoute exact path={AppRoute.MY_LIST} render={(props) =>
        <MyListWrapper
          loadingParams={[`films`, `authorizationStatus`]}
          {...props}
        />}
      />
    </Switch>
  </Router>;
};

export default App;
