import React from "react";
import ReactDOM from "react-dom";

import App from "@components/app";


const root = document.querySelector(`#root`);

ReactDOM.render(
    <App
      ganre={`Drama`}
      releaseDate={2014}
    />,
    root
);
