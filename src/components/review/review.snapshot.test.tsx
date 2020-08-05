import * as React from "react";
import * as render from "react-test-renderer";

import Review from "./review";


const text = `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`;
const ratingScore = 8.9;
const author = `Kate Muir`;
const date = `December 24, 2016`;
const underlineColor = `#ffffff`;

test(`should render component`, () => {
  const tree = render
    .create(
        <Review
          text={text}
          ratingScore={ratingScore}
          author={author}
          date={date}
          underlineColor={underlineColor}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
