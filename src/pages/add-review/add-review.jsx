import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "@components/breadcrumbs/breadcrumbs";
import Logo from "@components/logo/logo";
import User from "@components/user/user";
import Rating from "@components/rating/rating";
import {withRadioGroupValue} from "@common/hocs";
import {filmType} from "@common/types";
import {getColorParams} from "@common/utils";


const RatingControl = withRadioGroupValue(Rating);

const MIN_COMMENT_SYMBOLS = 50;
const MAX_COMMENT_SYMBOLS = 400;

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._ratingRef = createRef();
    this._commentRef = createRef();
    this._buttonRef = createRef();
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._checkDisabledButton = this._checkDisabledButton.bind(this);
  }

  render() {
    const {isAuthorized, avatar, film} = this.props;
    const {name, picture} = film;

    const breadcrumbs = [
      {name, href: `/films/${film.id}`},
      {name: `Add review`}
    ];
    const colors = getColorParams({
      hexColor: picture.backgroundColor,
      offset: 20,
    });
    return <section
      className="movie-card movie-card--full"
      style={{background: picture.backgroundColor}}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={picture.cover} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <Breadcrumbs list={breadcrumbs}/>
          <User
            avatar={avatar || ``}
            isAuthorized={isAuthorized}
          />
        </header>
        <div className="movie-card__poster movie-card__poster--small">
          <img
            src={picture.poster}
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={this._handleFormSubmit}>
          <RatingControl ref={this._ratingRef} defaultValue="0" onControlChange={this._checkDisabledButton}/>

          <div className="add-review__text" style={{background: colors.RGBAWithOffset}}>
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              ref={this._commentRef}
              onChange={this._checkDisabledButton}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                style={{color: colors.invertRGBA}}
                disabled
                ref={this._buttonRef}
              >Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>;
  }

  _checkDisabledButton() {
    const countCommentSymbols = this._commentRef.current.value.length;
    const isInvalidComment = countCommentSymbols < MIN_COMMENT_SYMBOLS || countCommentSymbols > MAX_COMMENT_SYMBOLS;
    const isInvalidRating = this._ratingRef.current.value === `0`;
    this._buttonRef.current.disabled = isInvalidComment || isInvalidRating;
  }

  _handleFormSubmit(event) {
    const {onSubmitForm} = this.props;
    event.preventDefault();
    onSubmitForm({
      rating: this._ratingRef.current.value,
      comment: this._commentRef.current.value,
    });
  }
}

AddReview.propTypes = {
  avatar: PropTypes.string,
  isAuthorized: PropTypes.bool.isRequired,
  film: PropTypes.shape(filmType),
  onSubmitForm: PropTypes.func.isRequired,
};

export default AddReview;
