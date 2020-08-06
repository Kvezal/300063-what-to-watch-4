import * as React from "react";

import {VIDEO_PLAYING_DELAY} from "@common/consts";
import {IFilmCardProps} from "@components/film-card/interface";


class FilmCard extends React.PureComponent<IFilmCardProps> {
  private _timer = 0;
  constructor(props) {
    super(props);

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  public componentWillUnmount() {
    clearTimeout(this._timer);
    this._handleCardMouseEnter = null;
    this._handleCardMouseLeave = null;
  }

  private _handleCardMouseEnter() {
    const {onPlayingChange} = this.props;
    this._timer = window.setTimeout(() => {
      onPlayingChange(true);
      clearTimeout(this._timer);
    }, VIDEO_PLAYING_DELAY);
  }

  private _handleCardMouseLeave() {
    const {onPlayingChange} = this.props;
    if (this._timer) {
      clearTimeout(this._timer);
    }
    onPlayingChange(false);
  }

  public render() {
    const {filmId, filmName, onCardClick, renderPlayer} = this.props;

    return <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onCardClick(filmId)}
      onMouseEnter={this._handleCardMouseEnter}
      onMouseLeave={this._handleCardMouseLeave}
    >
      <div className="small-movie-card__image">
        {renderPlayer()}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link">{filmName}</a>
      </h3>
    </article>;
  }
}

export default FilmCard;
