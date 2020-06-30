import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Review from "./review";
import render from "react-test-renderer";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ReviewComponent`, () => {
  const text = `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`;
  const ratingScore = 8.9;
  const author = `Kate Muir`;
  const date = `December 24, 2016`;

  test(`should render component`, () => {
    const tree = render
      .create(
          <Review
            text={text}
            ratingScore={ratingScore}
            author={author}
            date={date}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const reviewsComponent = shallow(
        <Review
          text={text}
          ratingScore={ratingScore}
          author={author}
          date={date}
        />
    );
    const reviewsContainer = reviewsComponent.find(`.review`);
    expect(reviewsContainer).toHaveLength(1);
  });

  test(`should match text`, () => {
    const reviewsComponent = shallow(
        <Review
          text={text}
          ratingScore={ratingScore}
          author={author}
          date={date}
        />
    );
    const reviewsText = reviewsComponent.find(`.review__text`).text();
    expect(reviewsText).toBe(text);
  });

  test(`should match rating score`, () => {
    const reviewsComponent = shallow(
        <Review
          text={text}
          ratingScore={ratingScore}
          author={author}
          date={date}
        />
    );
    const reviewsRating = reviewsComponent.find(`.review__rating`).text();
    expect(reviewsRating).toBe(`${ratingScore}`);
  });

  test(`should match author`, () => {
    const reviewsComponent = shallow(
        <Review
          text={text}
          ratingScore={ratingScore}
          author={author}
          date={date}
        />
    );
    const reviewsAuthor = reviewsComponent.find(`.review__author`).text();
    expect(reviewsAuthor).toBe(`${author}`);
  });

  test(`should match date`, () => {
    const reviewsComponent = shallow(
        <Review
          text={text}
          ratingScore={ratingScore}
          author={author}
          date={date}
        />
    );
    const reviewsDate = reviewsComponent.find(`.review__date`).text();
    expect(reviewsDate).toBe(`${date}`);
  });
});
