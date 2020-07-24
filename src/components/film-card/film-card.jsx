import React, {PureComponent} from "react";
import PropTypes from "prop-types";


const VIDEO_PLAYING_DELAY = 1000;

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this._timer = 0;
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
    this._timer = setTimeout(() => {
      onPlayingChange(true);
      clearTimeout(this._timer);
    }, VIDEO_PLAYING_DELAY);
  }

  _handleCardMouseLeave() {
    const {onPlayingChange} = this.props;
    if (this._timer) {
      clearTimeout(this._timer);
    }
    onPlayingChange(false);
  }

  componentWillUnmount() {
    clearTimeout(this._timer);
    this._handleCardMouseEnter = null;
    this._handleCardMouseLeave = null;
  }
}

FilmCard.propTypes = {
  filmId: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onPlayingChange: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

export default FilmCard;
