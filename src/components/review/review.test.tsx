import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Review from "./review";


configure({
  adapter: new Adapter(),
});

const text = `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`;
const ratingScore = 8.9;
const author = `Kate Muir`;
const date = `December 24, 2016`;
const underlineColor = `#ffffff`;

describe(`ReviewComponent`, () => {
  test(`should create component`, () => {
    const reviewsComponent = shallow(
        <Review
          text={text}
          ratingScore={ratingScore}
          author={author}
          date={date}
          underlineColor={underlineColor}
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
          underlineColor={underlineColor}
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
          underlineColor={underlineColor}
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
          underlineColor={underlineColor}
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
          underlineColor={underlineColor}
        />
    );
    const reviewsDate = reviewsComponent.find(`.review__date`).text();
    expect(reviewsDate).toBe(`${date}`);
  });
});
