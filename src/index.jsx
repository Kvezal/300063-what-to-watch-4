import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "@app/app";
import {createAPI} from "@services";
import reducer from "@store/reducer";
import {loadFilms, loadPromoFilm, loadFilmReviews} from "@store/data/operation";
import {checkAuth} from "@store/user/operation";
import createAPIMiddleware from "@services/create-api-middleware";


const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(createAPIMiddleware(api))
    )
);

store.dispatch(checkAuth());
store.dispatch(loadFilms());
store.dispatch(loadPromoFilm());
store.dispatch(loadFilmReviews());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
