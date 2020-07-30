import * as React from "react";

import {IFilmCardProps} from "@components/film-card/interface";


const VIDEO_PLAYING_DELAY = 1000;

class FilmCard extends React.PureComponent<IFilmCardProps> {
  private timer = 0;
  constructor(props) {
    super(props);

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
  }

  render() {
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

  _handleCardMouseEnter() {
    const {onPlayingChange} = this.props;
    this.timer = window.setTimeout(() => {
      onPlayingChange(true);
      clearTimeout(this.timer);
    }, VIDEO_PLAYING_DELAY);
  }

  _handleCardMouseLeave() {
    const {onPlayingChange} = this.props;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    onPlayingChange(false);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this._handleCardMouseEnter = null;
    this._handleCardMouseLeave = null;
  }
}

export default FilmCard;
