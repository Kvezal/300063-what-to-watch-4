import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MainPage from "./main-page";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainPageComponent`, () => {
  const avatar = `avatar.jpg`;
  const films = [
    {
      id: 1,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      genre: `test`,
    },
    {
      id: 2,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/bohemian-rhapsody.jpg`,
      title: `Bohemian Rhapsody`,
      genre: `test`,
    },
    {
      id: 3,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/macbeth.jpg`,
      title: `Macbeth`,
      genre: `test`,
    },
    {
      id: 4,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      href: `movie-page.html`,
      poster: `img/aviator.jpg`,
      title: `Aviator`,
      genre: `test`,
    },
  ];

  const promoFilm = {
    id: 1,
    name: `The Grand Budapest Hotel`,
    picture: {
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
      cover: `img/bg-the-grand-budapest-hotel.jpg`,
    },
    genres: [`Drama`],
    runTime: `1h 39m`,
    releaseDate: 2014,
  };

  it(`card titles should be pressed`, () => {
    const onCardClick = jest.fn();
    const mainPage = shallow(
        <MainPage
          promoFilm={promoFilm}
          genre=""
          onFilterClick={() => {}}
          films={films}
          avatar={avatar}
          onCardClick={onCardClick}
          onStepChange={() => {}}
          step={1}
        />
    );
    const mainTitleList = mainPage.find(`a.small-movie-card__link`);
    mainTitleList.forEach((mainTitle) => mainTitle.simulate(`click`));
    expect(onCardClick).toHaveBeenCalledTimes(mainTitleList.length);
  });
});
