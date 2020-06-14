import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "@components/main-page/main-page";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainPageComponent`, () => {
  const currentFilmGenres = [`Drama`];
  const releaseDate = 1984;
  const filmList = [
    {id: 1, picture: `fantastic-beasts-the-crimes-of-grindelwald.jpg`, title: `Fantastic Beasts: The Crimes of Grindelwald`},
    {id: 2, picture: `bohemian-rhapsody.jpg`, title: `Bohemian Rhapsody`},
    {id: 3, picture: `macbeth.jpg`, title: `Macbeth`},
    {id: 4, picture: `aviator.jpg`, title: `Aviator`},
  ];

  it(`card titles should be pressed`, () => {
    const onMainTitleClick = jest.fn();
    const mainPage = shallow(
        <MainPage
          currentFilmGenres={currentFilmGenres}
          releaseDate={releaseDate}
          filmList={filmList}
          onMainTitleClick={onMainTitleClick}
        />
    );
    const mainTitleList = mainPage.find(`a.small-movie-card__link`);
    mainTitleList.forEach((mainTitle) => mainTitle.props().onClick());
    expect(onMainTitleClick.mock.calls.length).toBe(mainTitleList.length);
  });
});
