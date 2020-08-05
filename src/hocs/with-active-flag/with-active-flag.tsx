import * as React from "react";
import {Subtract} from "utility-types";

import {IWithActiveFlagHOCInjectProps, IWithActiveFlagHOCState} from "./interface";


const withActiveFlag = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type T = Subtract<TComponent, IWithActiveFlagHOCInjectProps>

  return class WithActiveFlag extends React.PureComponent<T, IWithActiveFlagHOCState> {
    private _isUnmounted = false;

    constructor(props) {
      super(props);
      this._handlerActiveChange = this._handlerActiveChange.bind(this);
      this.state = {
        isActive: props.isActive,
      };
    }

    public componentWillUnmount() {
      this._isUnmounted = true;
    }

    private _handlerActiveChange() {
      return !this._isUnmounted && this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    public render() {
      const {isActive} = this.state;

      return <Component
        {...this.props}
        isActive={isActive}
        onActiveChange={this._handlerActiveChange}
      />;
    }
  };
};

export default withActiveFlag;
