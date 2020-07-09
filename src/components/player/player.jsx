import React, {Fragment} from "react";
import PropTypes from "prop-types";


const Player = (props) => {
  return <Fragment>
    {props.children}
  </Fragment>;
};

Player.propTypes = {
  children: PropTypes.node.isRequired
};

export default Player;
