import * as React from "react";
import {Link} from "react-router-dom";

import AppRoute from "@app/app-route";
import {getTime} from "@common/utils";

import {IPlayerProps} from "./interface";


const PERCENTS_IN_ONE = 100;

const Player: React.FC<IPlayerProps> = (props: IPlayerProps) => {
  const {renderPlayer, onFullScreenOpen, isPlaying, onPlayingChange, duration, time} = props;
  const progress = time / duration * PERCENTS_IN_ONE;

  return <div className="player">
    {renderPlayer()}

    <Link
      className="player__exit"
      to={AppRoute.ROOT}
      style={{textDecoration: `none`}}
    >
      Exit
    </Link>

    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={`${progress}`} max="100"/>
          <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
        </div>
        <div className="player__time-value">{getTime(duration - time)}</div>
      </div>

      <div className="player__controls-row">
        <button
          type="button"
          className="player__play"
          onClick={() => onPlayingChange()}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref={`#${isPlaying ? `pause` : `play-s`}`}/>
          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen" onClick={onFullScreenOpen}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"/>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  </div>;
};

export default Player;
