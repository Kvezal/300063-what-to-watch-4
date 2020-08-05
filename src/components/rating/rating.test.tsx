import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import Rating from "./rating";


configure({
  adapter: new Adapter(),
});

describe(`RatingComponent`, () => {
  test(`should create component`, () => {
    const ratingComponent = shallow(
        <Rating
          starCount={5}
          value="2"
          name="rating"
          onChange={() => null}
        />
    );
    const rating = ratingComponent.find(`.rating`);
    expect(rating).toHaveLength(1);
  });

  test(`should set star count`, () => {
    const starCount = 10;
    const ratingComponent = shallow(
        <Rating
          starCount={starCount}
          value="2"
          name="rating"
          onChange={() => null}
        />
    );
    const starts = ratingComponent.find(`.rating__label`);
    expect(starts).toHaveLength(starCount);
  });

  test(`click on star should call onChange`, () => {
    const onChange = jest.fn();
    const ratingComponent = shallow(
        <Rating
          starCount={5}
          value="2"
          name="rating"
          onChange={onChange}
        />
    );
    const starts = ratingComponent.find(`.rating__input`);
    starts.at(3).simulate(`change`);
    expect(onChange).toBeCalledTimes(1);
  });
});
