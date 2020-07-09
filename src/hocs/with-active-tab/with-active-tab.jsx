import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: props.activeTab,
      };
    }

    render() {
      const {onActiveTabChange} = this.props;
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        activeTab={activeTab}
        onActiveTabChange={(tab) => {
          this.setState({activeTab: tab});
          onActiveTabChange(tab);
        }}
      />;
    }
  }

  WithActiveTab.defaultProps = {
    onActiveTabChange: () => {},
  };

  WithActiveTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onActiveTabChange: PropTypes.func.isRequired,
  };

  return WithActiveTab;
};

export default withActiveTab;
