import * as React from "react";
import * as render from "react-test-renderer";

import Overview from "@pages/film/overview/overview";


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
