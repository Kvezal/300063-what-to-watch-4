import React from "react";
import render from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ButtonMore from "./button-more";


Enzyme.configure({
  adapter: new Adapter(),
});

describe(`ButtonMoreComponent`, () => {
  test(`should render component`, () => {
    const tree = render
      .create(
          <ButtonMore
            onButtonClick={() => {}}
          >Test</ButtonMore>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`should create component`, () => {
    const buttonMoreComponent = shallow(
        <ButtonMore
          onButtonClick={() => {}}
        >Test</ButtonMore>
    );
    const button = buttonMoreComponent.find(`button`);
    expect(button).toHaveLength(1);
  });

  test(`should have button`, () => {
    const buttonMoreComponent = shallow(
        <ButtonMore
          hide={false}
          onButtonClick={() => {}}
        >Test</ButtonMore>
    );
    const button = buttonMoreComponent.find(`button`);
    expect(button).toHaveLength(1);
  });

  test(`shouldn't have button`, () => {
    const buttonMoreComponent = shallow(
        <ButtonMore
          hide={true}
          onButtonClick={() => {}}
        >Test</ButtonMore>
    );
    const button = buttonMoreComponent.find(`button`);
    expect(button).toHaveLength(0);
  });
});
