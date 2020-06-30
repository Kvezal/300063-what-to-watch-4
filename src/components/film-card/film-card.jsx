import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import FileType from "@types/film";


class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);

    this.state = {
      isHovered: false,
    };
  }

  render() {
    const {onCardClick, info} = this.props;
    const {id, picture, title, href} = info;

    return <article
      className="small-movie-card catalog__movies-card"
      onClick={() => onCardClick(id)}
      onMouseEnter={this._handleCardMouseEnter}
      onMouseLeave={this._handleCardMouseLeave}
    >
      <div className="small-movie-card__image">
        <img src={`img/${picture}`} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={href}>{title}</a>
      </h3>
    </article>;
  }

  _handleCardMouseEnter() {
    this.setState({isHovered: true});
  }

  _handleCardMouseLeave() {
    this.setState({isHovered: false});
  }
}

FilmCard.propTypes = {
  info: PropTypes.shape(FileType).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default FilmCard;
