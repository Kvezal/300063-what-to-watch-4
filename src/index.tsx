import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";

import {App} from "@app/index";
import {createAPIMiddleware, multipleMiddleware} from "@middlewares/index";
import {createAPI} from "@services/index";
import reducer from "@store/reducer";
import {checkAuth} from "@store/user/operation";
import {loadFavoriteFilms, loadFilms, loadPromoFilm} from "@store/data/operation";


const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            multipleMiddleware,
            createAPIMiddleware(api)
        )
    )
);

store.dispatch([
  checkAuth(),
  loadFilms(),
  loadFavoriteFilms(),
  loadPromoFilm()
]);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
