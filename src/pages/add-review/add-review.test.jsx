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
            onSubmitForm={() => {}}
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
          onSubmitForm={() => {}}
        />
    );
    const addReview = addReviewComponent.find(`.add-review`);
    expect(addReview).toHaveLength(1);
  });

  test(`should disabled button`, () => {
    const addReviewComponent = shallow(
      <AddReview
        avatar="test-avatar"
        isAuthorized={true}
        film={film}
        onSubmitForm={() => {}}
      />
    );
    const buttonRef = addReviewComponent.instance()._buttonRef = {
      current: {
        disabled: false,
      }
    };
    addReviewComponent.instance()._ratingRef.current = {
      value: `1`,
    };
    addReviewComponent.instance()._commentRef.current = {
      value: new Array(49).fill(0).join(``),
    };
    addReviewComponent.find(`.add-review__textarea`).simulate(`change`);
    expect(buttonRef.current.disabled).toBeTruthy();

    addReviewComponent.instance()._commentRef.current = {
      value: new Array(50).fill(0).join(``),
    };
    addReviewComponent.find(`.add-review__textarea`).simulate(`change`);
    expect(buttonRef.current.disabled).toBeFalsy();

    addReviewComponent.instance()._commentRef.current = {
      value: new Array(400).fill(0).join(``),
    };
    addReviewComponent.find(`.add-review__textarea`).simulate(`change`);
    expect(buttonRef.current.disabled).toBeFalsy();

    addReviewComponent.instance()._commentRef.current = {
      value: new Array(401).fill(0).join(``),
    };
    addReviewComponent.find(`.add-review__textarea`).simulate(`change`);
    expect(buttonRef.current.disabled).toBeTruthy();
  });

  test(`should submit form with correct params`, () => {
    const onSubmitForm = jest.fn();
    const rating = 5;
    const comment = new Array(100).fill(1).join(``);
    const addReviewComponent = shallow(
      <AddReview
        avatar="test-avatar"
        isAuthorized={true}
        film={film}
        onSubmitForm={onSubmitForm}
      />
    );
    addReviewComponent.instance()._ratingRef.current = {value: rating};
    addReviewComponent.instance()._commentRef.current = {value: comment};
    addReviewComponent.find(`form`).simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmitForm).toBeCalledTimes(1);
    expect(onSubmitForm.mock.calls[0][0]).toEqual({rating, comment});
  });
});
