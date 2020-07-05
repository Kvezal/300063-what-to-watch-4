import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Tabs from "@components/tabs";


const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this._renderTabs = this._renderTabs.bind(this);
      this._handleTabClick = this._handleTabClick.bind(this);
      this.state = {
        activeTab: this.props.baseTab
      };
    }

    render() {
      const {activeTab} = this.state;
      return <Component
        {...this.props}
        activeTab={activeTab}
        renderTabs={this._renderTabs}
      />;
    }

    _renderTabs(tabs) {
      const {activeTab} = this.state;

      return <Tabs
        list={tabs}
        activeTab={activeTab}
        onTabClick={this._handleTabClick}
      />;
    }

    _handleTabClick(activeTab) {
      this.setState({activeTab});
    }
  }

  WithTabs.propTypes = {
    baseTab: PropTypes.string.isRequired,
  };

  return WithTabs;
};

export default withTabs;
