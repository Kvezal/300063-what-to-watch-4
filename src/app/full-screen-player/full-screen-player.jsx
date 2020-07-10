import React from "react";
import PropTypes from "prop-types";

import getTime from "@utils/get-time";


const FullScreenPlayer = (props) => {
  const {renderPlayer, isActive, onActiveChange, duration, time} = props;

  return <div className="player">
    {renderPlayer()}

    <button type="button" className="player__exit">Exit</button>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value="30" max="100"/>
          <div className="player__toggler" style="left: 30%;">Toggler</div>
        </div>
        <div className="player__time-value">{getTime(duration - time)}</div>
      </div>

      <div className="player__controls-row">
        <button
          type="button"
          className="player__play"
          onClick={onActiveChange}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref={`#${isActive ? `pause` : `play-s`}`}/>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen">
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"/>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>;
};

FullScreenPlayer.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActiveChange: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default FullScreenPlayer;
