import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Reviews from "./reviews";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ReviewsComponent`, () => {
  const reviews = [
    {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
      ratingScore: 8.9,
      author: `Kate Muir`,
      date: `December 24, 2016`,
    },
    {
      text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      ratingScore: 8.0,
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
    },
    {
      text: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
      ratingScore: 8.0,
      author: `Amanda Greever`,
      date: `November 18, 2015`,
    },
    {
      text: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
      ratingScore: 7.2,
      author: `Matthew Lickona`,
      date: `December 20, 2016`,
    },
    {
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      ratingScore: 7.6,
      author: `Paula Fleri-Soler`,
      date: `December 20, 2016`,
    },
    {
      text: `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
      ratingScore: 7.0,
      author: `Paula Fleri-Soler`,
      date: `December 20, 2016`,
    },
  ];

  test(`should render component`, () => {
    const tree = render
      .create(<Reviews list={reviews}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const reviewsComponent = shallow(
        <Reviews list={reviews}/>
    );
    const reviewsContainer = reviewsComponent.find(`.movie-card__reviews`);
    expect(reviewsContainer).toHaveLength(1);
  });

  test(`should have reviews`, () => {
    const reviewsComponent = mount(
        <Reviews list={reviews}/>
    );
    const reviewsContainer = reviewsComponent.find(`.review`);
    expect(reviewsContainer).toHaveLength(reviews.length);
  });
});
