import React from "react";
import render from "react-test-renderer";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import FilmList from "./film-list";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`FilmListComponent`, () => {
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

  test(`should render component`, () => {
    const tree = render
      .create(
          <FilmList list={films} onCardClick={() => {}}/>,
          {createNodeMock: () => ({})}
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const filmListComponent = mount(<FilmList list={films} onCardClick={() => {}}/>);
    const list = filmListComponent.find(`div.catalog__movies-list`);
    expect(list).toHaveLength(1);
  });

  test(`should have film cards`, () => {
    const filmListComponent = mount(<FilmList list={films} onCardClick={() => {}}/>);
    const cards = filmListComponent.find(`article.small-movie-card`);
    expect(cards).toHaveLength(films.length);
  });

  test(`should have cards limit`, () => {
    const pack = 2;
    const filmListComponent = mount(
        <FilmList
          list={films}
          onCardClick={() => {}}
          pack={pack}
        />
    );
    const cards = filmListComponent.find(`article.small-movie-card`);
    expect(cards).toHaveLength(pack);
  });

  test(`should have cards limit`, () => {
    const pack = 2;
    const step = 2;
    const filmListComponent = mount(
        <FilmList
          list={films}
          onCardClick={() => {}}
          pack={pack}
          step={step}
        />
    );
    const cards = filmListComponent.find(`article.small-movie-card`);
    expect(cards).toHaveLength(pack * step);
  });
});
