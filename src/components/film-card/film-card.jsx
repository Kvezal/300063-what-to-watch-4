import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import FileType from "@types/film";


class FilmCard extends PureComponent {
  constructor(props) {
    super(props);
    this._handleCardClick = this._handleCardClick.bind(this);
    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);

    this.state = {
      isHovered: false,
    };
  }

  render() {
    const {picture, title, href} = this.props.info;

    return <article
      className="small-movie-card catalog__movies-card"
      onClick={this._handleCardClick}
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

  _handleCardClick() {
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
};

export default FilmCard;
