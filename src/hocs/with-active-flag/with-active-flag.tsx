import * as React from "react";
import {Subtract} from "utility-types";


interface IWithActiveFlag {
  isActive: boolean;
}

interface IInjectProps extends IWithActiveFlag {
  isActive: boolean;
  onActiveChange: (tab: string) => void;
}

const withActiveFlag = (Component) => {
  type TComponent = React.ComponentProps<typeof Component>;
  type T = Subtract<TComponent, IInjectProps>

  return class WithActiveFlag extends React.PureComponent<T, IWithActiveFlag> {
    static defaultProps: IWithActiveFlag = {
      isActive: false,
    };
    private isUnmounted = false;

    constructor(props) {
      super(props);
      this._handlerActiveChange = this._handlerActiveChange.bind(this);
      this.state = {
        isActive: props.isActive,
      };
    }

    _handlerActiveChange() {
      return !this.isUnmounted && this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    render() {
      const {isActive} = this.state;

      return <Component
        {...this.props}
        isActive={isActive}
        onActiveChange={this._handlerActiveChange}
      />;
    }

    componentWillUnmount() {
      this.isUnmounted = true;
    }
  };
};

export default withActiveFlag;
