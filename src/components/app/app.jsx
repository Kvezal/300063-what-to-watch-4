import React from "react";

import MainPage from "@components/main-page";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {ganre, releaseDate} = props;

  return <MainPage
    ganre={ganre}
    releaseDate={releaseDate}
  />;
};

export default App;
