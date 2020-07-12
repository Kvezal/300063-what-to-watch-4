const films = [
  {
    id: 1,
    name: `Once Upon a Time in America`,
    genre: `Crime`,
    runTime: `1h 49m`,
    releaseDate: 1984,
    description: `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`,
    director: `Sergio Leone`,
    rating: {
      score: 9.9,
      count: 276395,
      assessment: `Very well`,
    },
    source: {
      video: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
      previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    },
    picture: {
      poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
      cover: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
      color: `#CBAC79`,
    },
    starring: [
      `Robert De Niro`,
      `James Woods`,
      `Elizabeth McGovern`
    ],
  }
];

export default films;
