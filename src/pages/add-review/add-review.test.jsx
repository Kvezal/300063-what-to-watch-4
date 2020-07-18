import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddReview from "./add-review";
import {MemoryRouter} from "react-router-dom";


const film = {
  id: 1,
  name: `name 1`,
  genre: `Crime`,
  runTime: `3h 49m`,
  releaseDate: 1984,
  description: `description 1`,
  director: `director 1`,
  rating: {
    score: 9.9,
    count: 276395,
    assessment: `Very good`,
  },
  source: {
    video: `video1`,
    previewVideo: `previewVideo1`,
  },
  picture: {
    poster: `poster1`,
    preview: `preview1`,
    cover: `cover1`,
    backgroundColor: `color1`,
  },
  starring: [
    `Robert De Niro`,
    `James Woods`,
    `Elizabeth McGovern`
  ],
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`AddReviewPage`, () => {
  test(`should render component`, () => {
    const tree = render.create(
        <MemoryRouter>
          <AddReview
            avatar="test-avatar"
            isAuthorized={true}
            film={film}
          />
        </MemoryRouter>
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const addReviewComponent = shallow(
        <AddReview
          avatar="test-avatar"
          isAuthorized={true}
          film={film}
        />
    );
    const addReview = addReviewComponent.find(`.add-review`);
    expect(addReview).toHaveLength(1);
  });
});
