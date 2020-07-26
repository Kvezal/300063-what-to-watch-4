import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddReview from "./add-review";
import {MemoryRouter} from "react-router-dom";
import {AuthorizationStatus} from "@store/user/const";


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

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`AddReviewPage`, () => {
  test(`should render component`, () => {
    const tree = render.create(
        <MemoryRouter>
          <AddReview
            avatar="test-avatar"
            authorizationStatus={AuthorizationStatus.AUTH}
            film={film}
            onSubmitForm={() => {}}
            formDisabled={true}
            formState={{
              rating: `0`,
              comment: ``,
            }}
            onControlChange={() => {}}
            onDisabledChange={() => {}}
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
          authorizationStatus={AuthorizationStatus.AUTH}
          film={film}
          onSubmitForm={() => {}}
          formDisabled={false}
          formState={{
            rating: `0`,
            comment: ``,
          }}
          onControlChange={() => {}}
          onDisabledChange={() => {}}
        />
    );
    const addReview = addReviewComponent.find(`.add-review`);
    expect(addReview).toHaveLength(1);
  });

  test(`should call onDisabledChange`, () => {
    const onDisabledChange = jest.fn();
    const addReviewComponent = shallow(
      <AddReview
        avatar="test-avatar"
        authorizationStatus={AuthorizationStatus.AUTH}
        film={film}
        onSubmitForm={() => {}}
        formDisabled={false}
        formState={{
          rating: `0`,
          comment: ``,
        }}
        onControlChange={() => {}}
        onDisabledChange={onDisabledChange}
      />
    );

    addReviewComponent.find(`form`).simulate(`change`, {
      currentTarget: {
        checkValidity: () => {},
      }
    });
    expect(onDisabledChange).toBeCalledTimes(1);
  });

  test(`should call onControlChange`, () => {
    const onControlChange = jest.fn();
    const test = `test`;
    const addReviewComponent = shallow(
      <AddReview
        avatar="test-avatar"
        authorizationStatus={AuthorizationStatus.AUTH}
        film={film}
        onSubmitForm={() => {}}
        formDisabled={false}
        formState={{
          rating: `0`,
          comment: ``,
        }}
        onControlChange={onControlChange}
        onDisabledChange={() => {}}
      />
    );

    addReviewComponent.find(`.add-review__textarea`).simulate(`change`, {
      target: {
        value: test,
      }
    });
    expect(onControlChange).toBeCalledTimes(1);
    expect(onControlChange).toHaveBeenCalledWith(`comment`, test);
  });

  test(`should submit form with correct params`, () => {
    const onSubmitForm = jest.fn();
    const rating = `5`;
    const comment = new Array(100).fill(1).join(``);
    const addReviewComponent = shallow(
      <AddReview
        avatar="test-avatar"
        authorizationStatus={AuthorizationStatus.AUTH}
        film={film}
        formDisabled={false}
        formState={{
          rating,
          comment,
        }}
        onControlChange={() => {}}
        onDisabledChange={() => {}}
        onSubmitForm={onSubmitForm}
      />
    );
    addReviewComponent.find(`form`).simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmitForm).toBeCalledTimes(1);
    expect(onSubmitForm.mock.calls[0][0]).toEqual({rating, comment});
  });

  test(`submit button should be disabled`, () => {
    const onSubmitForm = jest.fn();
    const addReviewComponent = shallow(
      <AddReview
        avatar="test-avatar"
        authorizationStatus={AuthorizationStatus.AUTH}
        film={film}
        formDisabled={true}
        formState={{
          rating: `0`,
          comment: ``,
        }}
        onControlChange={() => {}}
        onDisabledChange={() => {}}
        onSubmitForm={onSubmitForm}
      />
    );
    const submitButton = addReviewComponent.find(`button[type="submit"]`).props().disabled;
    expect(submitButton).toBeTruthy();
  });

  test(`submit button shouldn't be disabled`, () => {
    const onSubmitForm = jest.fn();
    const addReviewComponent = shallow(
      <AddReview
        avatar="test-avatar"
        authorizationStatus={AuthorizationStatus.AUTH}
        film={film}
        formDisabled={false}
        formState={{
          rating: `0`,
          comment: ``,
        }}
        onControlChange={() => {}}
        onDisabledChange={() => {}}
        onSubmitForm={onSubmitForm}
      />
    );
    const submitButton = addReviewComponent.find(`button[type="submit"]`).props().disabled;
    expect(submitButton).toBeFalsy();
  });
});
