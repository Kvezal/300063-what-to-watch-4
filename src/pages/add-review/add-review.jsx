import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "@components/breadcrumbs/breadcrumbs";
import Logo from "@components/logo/logo";
import User from "@components/user/user";
import Rating from "@components/rating/rating";
import {withRadioGroupValue} from "@common/hocs";
import {filmType} from "@common/types";
import {getColorParams} from "@common/utils";
import {CommentStatus} from "@store/data/const";


const RatingControl = withRadioGroupValue(Rating);

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._formState = {
      rating: `0`,
      comment: ``,
    };

    this._formRef = createRef();
    this._buttonRef = createRef();
    this._ratingRef = createRef();
    this._commentRef = createRef();
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
        <form
          action="#"
          className="add-review__form"
          onSubmit={this._handleFormSubmit}
          onChange={this._checkDisabledButton}
          ref={this._formRef}
        >
          <RatingControl
            defaultValue={this._formState.rating}
            name="rating"
            required
            onControlChange={(value) => {
              this._formState.rating = value;
            }}
            ref={this._ratingRef}
          />

          <div className="add-review__text" style={{background: colors.RGBAWithOffset}}>
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              minLength="50"
              maxLength="400"
              required
              onChange={(event) => {
                this._formState.comment = event.target.value;
              }}
              defaultValue={this._formState.comment}
              ref={this._commentRef}
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
    const {commentStatus} = this.props;
    const isValidForm = this._formRef.current.checkValidity();
    const isAccessCommentStatus = commentStatus !== CommentStatus.POSTING;
    this._buttonRef.current.disabled = !(isValidForm && isAccessCommentStatus);
  }

  _handleFormSubmit(event) {
    const {onSubmitForm} = this.props;
    event.preventDefault();
    onSubmitForm(this._formState);
  }

  componentDidUpdate(prev) {
    const {commentStatus} = this.props;
    if (prev && prev.commentStatus !== commentStatus) {
      this._checkDisabledButton();
    }
  }
}

AddReview.propTypes = {
  avatar: PropTypes.string,
  isAuthorized: PropTypes.bool.isRequired,
  film: PropTypes.shape(filmType),
  commentStatus: PropTypes.oneOf(
      Object.values(CommentStatus)
  ).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default AddReview;
