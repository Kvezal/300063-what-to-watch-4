import * as React from "react";
import {Switch, Route, Router} from "react-router-dom";

import EAppRoute from "@app/app-route";
import history from "@app/history";
import {ALL_GENRES} from "@common/consts";
import {EFilmTab} from "@common/enums";
import AddReview from "@containers/add-review";
import Film from "@containers/film";
import Main from "@containers/main";
import Player from "@containers/player";
import PrivateRoute from "@containers/private-route";
import SignIn from "@containers/sign-in";
import MyList from "@containers/my-list";
import {withActiveTab, withNotifications, withStep} from "@hocs/index";
import {EUserErrorNotificationName} from "@store/user/interface";


const AddReviewWrapper = withNotifications(AddReview);
const FilmWrapper = withNotifications(withActiveTab(Film));
const MainWrapper = withNotifications(withStep(Main));
const MyListWrapper = withNotifications(MyList);
const PlayerWrapper = withNotifications(Player);

const COUNT_FILMS_IN_ONE_STEP = 8;

const App = () => {
  const filmDescriptionTabs = Object.values(EFilmTab);

  return <Router history={history}>
    <Switch>
      <Route exact path={EAppRoute.ROOT} render={(props) => {
        return <MainWrapper
          {...props}
          activeTab={ALL_GENRES}
          pack={COUNT_FILMS_IN_ONE_STEP}
          loadingParams={[`promoFilm`, `films`, `authorizationStatus`]}
        />;
      }}/>
      <Route exact path={EAppRoute.PLAYER} render={(props) =>
        <PlayerWrapper
          {...props}
          canStop={true}
          muted={false}
          isPlaying={true}
          loadingParams={[`source`, `poster`]}
        />
      }/>
      <Route exact path={EAppRoute.LOGIN} render={() =>
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
      <PrivateRoute exact path={EAppRoute.REVIEW} render={(props) =>
        <AddReviewWrapper
          {...props}
          initialFormState={{
            rating: ``,
            comment: ``,
          }}
          initialFormDisabled={true}
          loadingParams={[`film`]}
        />}
      />
      <Route exact path={EAppRoute.FILMS} render={(props) =>
        <FilmWrapper
          {...props}
          tabs={filmDescriptionTabs}
          activeTab={EFilmTab.OVERVIEW}
          loadingParams={[`info`, `likedFilms`]}
        />}
      />
      <PrivateRoute exact path={EAppRoute.MY_LIST} render={(props) =>
        <MyListWrapper
          {...props}
          loadingParams={[`films`, `authorizationStatus`]}
        />}
      />
    </Switch>
  </Router>;
};

export default App;
