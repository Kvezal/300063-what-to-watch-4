import React from "react";
import render from "react-test-renderer";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Overview from "./overview";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OverviewComponent`, () => {
  const rating = {
    score: 8.9,
    assessment: `Very good`,
    count: 240,
  };
  const description = `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the
  sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously,
  Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`;
  const director = `Wes Andreson`;
  const starring = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `and other`];

  test(`should render component`, () => {
    const tree = render
      .create(
          <Overview
            rating={rating}
            description={description}
            director={director}
            starring={starring}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const overviewComponent = shallow(
        <Overview
          rating={rating}
          description={description}
          director={director}
          starring={starring}
        />
    );
    const movieRating = overviewComponent.find(`.movie-rating`);
    const movieText = overviewComponent.find(`.movie-card__text`);
    expect(movieRating).toHaveLength(1);
    expect(movieText).toHaveLength(1);
  });

  test(`should have rating score`, () => {
    const filmOverviewComponent = mount(
        <Overview
          rating={rating}
          description={description}
          director={director}
          starring={starring}
        />
    );
    const movieRatingScore = filmOverviewComponent.find(`.movie-rating__score`).text();
    expect(movieRatingScore).toBe(`${rating.score}`);
  });

  test(`should have rating assessment`, () => {
    const filmOverviewComponent = mount(
        <Overview
          rating={rating}
          description={description}
          director={director}
          starring={starring}
        />
    );
    const movieRatingAssessment = filmOverviewComponent.find(`.movie-rating__level`).text();
    expect(movieRatingAssessment).toBe(`${rating.assessment}`);
  });

  test(`should have rating count`, () => {
    const filmOverviewComponent = mount(
        <Overview
          rating={rating}
          description={description}
          director={director}
          starring={starring}
        />
    );
    const movieRatingCount = filmOverviewComponent.find(`.movie-rating__count`).text();
    expect(movieRatingCount.includes(rating.count)).toBeTruthy();
  });

  test(`should have director`, () => {
    const filmOverviewComponent = mount(
        <Overview
          rating={rating}
          description={description}
          director={director}
          starring={starring}
        />
    );
    const movieDirector = filmOverviewComponent.find(`.movie-card__director`).text();
    expect(movieDirector.includes(director)).toBeTruthy();
  });

  test(`should have starring`, () => {
    const filmOverviewComponent = mount(
        <Overview
          rating={rating}
          description={description}
          director={director}
          starring={starring}
        />
    );
    const movieStarring = filmOverviewComponent.find(`.movie-card__starring`).text();
    let starringString = starring.join(`, `);
    if (starring.length > 4) {
      starringString = `${starring.slice(0, 4).join(`, `)} and other`;
    }
    expect(movieStarring.includes(starringString)).toBeTruthy();
  });
});
