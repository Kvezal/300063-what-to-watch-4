const currentFilmGenres = [`Drama`];

const releaseDate = 2014;

const overviewFilm = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  picture: {
    poster: `the-grand-budapest-hotel-poster.jpg`,
    cover: `bg-the-grand-budapest-hotel.jpg`,
  },
  genres: currentFilmGenres,
  runTime: `1h 39m`,
  releaseDate,
  rating: {
    score: 8.9,
    level: `Very good`,
    count: 240,
  },
  descriptions: [
    `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`
  ],
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`, `Tony Revoloru`, `Tilda Swinton`, `Tom Wilkinson`, `Owen Wilkinson`, `Adrien Brody`, `Ralph Fiennes`, `Jeff Goldblum`],
};

export default {
  currentFilmGenres,
  releaseDate,
  overviewFilm,
};
