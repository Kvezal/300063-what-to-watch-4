import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withLoading from "./with-loading";


configure({
  adapter: new Adapter(),
});

interface ITestComponent {
  propString: string;
  prop: string;
}
const TestComponent: React.FC<ITestComponent> = () => {
  return <div className="test-component"/>;
};

const TestComponentWithHOC = withLoading(TestComponent);

describe(`withLoadingHOC`, () => {
  test(`shouldn't create component`, () => {
    const testComponent = mount(
        <TestComponentWithHOC
          prop={null}
          unlessProp={null}
          loadingParams={[`prop`]}
        />
    );
    expect(testComponent.find(`div.test-component`)).toHaveLength(0);
  });

  test(`should create component`, () => {
    const testComponent = mount(
        <TestComponentWithHOC
          prop=""
          unlessProp={null}
          loadingParams={[`prop`]}
        />
    );
    expect(testComponent.find(`div.test-component`)).toHaveLength(1);
  });
});
