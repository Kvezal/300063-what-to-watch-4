import React from "react";
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "@app/app";
import {createAPI} from "@services";
import reducer from "@store/reducer";
import {loadFilms, loadPromoFilm, loadFilmReviews} from "@store/data/operation";


const api = createAPI(() => {});

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(loadFilms());
store.dispatch(loadPromoFilm());
store.dispatch(loadFilmReviews());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
