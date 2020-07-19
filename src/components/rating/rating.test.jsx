import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Rating from "./rating";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`RatingComponent`, () => {
  test(`should render component`, () => {
    const tree = render.create(
        <Rating
          value="2"
          onChange={() => {}}
        />
    )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const ratingComponent = shallow(
        <Rating
          value="2"
          onChange={() => {}}
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
          onChange={() => {}}
        />
    );
    const starts = ratingComponent.find(`.rating__label`);
    expect(starts).toHaveLength(starCount);
  });

  test(`click on star should call onChange`, () => {
    const onChange = jest.fn();
    const ratingComponent = shallow(
        <Rating
          value="2"
          onChange={onChange}
        />
    );
    const starts = ratingComponent.find(`.rating__input`);
    starts.at(3).simulate(`change`);
    expect(onChange).toBeCalledTimes(1);
  });
});
