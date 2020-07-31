import * as React from "react";
import * as render from "react-test-renderer";
import {MemoryRouter} from "react-router-dom";

import AddReview from "@pages/add-review/add-review";
import {EAuthorizationStatus} from "@store/user/interface";


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
  isFavorite: false,
};

test(`should render AddReview component`, () => {
  const tree = render.create(
      <MemoryRouter>
        <AddReview
          avatar="test-avatar"
          authorizationStatus={EAuthorizationStatus.AUTH}
          film={film}
          onSubmitForm={() => null}
          formDisabled={true}
          formState={{
            rating: `0`,
            comment: ``,
          }}
          onControlChange={() => null}
          onDisabledChange={() => null}
        />
      </MemoryRouter>
  )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
