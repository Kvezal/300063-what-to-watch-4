import React from "react";
import PropTypes from "prop-types";

import history from "@app/history";


const withActiveTab = (Component) => {
  const WithActiveTab = (props) => {
    const {location, activeTab} = props;
    return <Component
      {...props}
      activeTab={decodeURIComponent(location.hash.replace(`#`, ``)) || activeTab}
      onActiveTabChange={(tab) => history.push(`#${tab}`)}
    />;
  };

  WithActiveTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    location: PropTypes.shape({
      hash: PropTypes.string,
    }).isRequired,
  };

  return WithActiveTab;
};

export default withActiveTab;
