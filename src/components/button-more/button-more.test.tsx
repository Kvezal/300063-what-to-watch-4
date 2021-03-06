import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import ButtonMore from "./button-more";


configure({
  adapter: new Adapter(),
});

describe(`ButtonMoreComponent`, () => {
  test(`should create component`, () => {
    const buttonMoreComponent = shallow(
        <ButtonMore
          hide={false}
          onButtonClick={() => null}
        >Test</ButtonMore>
    );
    const button = buttonMoreComponent.find(`button`);
    expect(button).toHaveLength(1);
  });

  test(`should have button`, () => {
    const buttonMoreComponent = shallow(
        <ButtonMore
          hide={false}
          onButtonClick={() => null}
        >Test</ButtonMore>
    );
    const button = buttonMoreComponent.find(`button`);
    expect(button).toHaveLength(1);
  });

  test(`shouldn't have button`, () => {
    const buttonMoreComponent = shallow(
        <ButtonMore
          hide={true}
          onButtonClick={() => null}
        >Test</ButtonMore>
    );
    const button = buttonMoreComponent.find(`button`);
    expect(button).toHaveLength(0);
  });
});
