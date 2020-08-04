import React from "react";
import PropTypes from "prop-types";

import Breadcrumbs from "@components/breadcrumbs/breadcrumbs";
import Logo from "@components/logo/logo";
import User from "@components/user/user";
import Rating from "@components/rating/rating";
import {withRadioGroupValue} from "@common/hocs";
import {filmType} from "@common/types";
import {getColorParams} from "@common/utils";
import {AuthorizationStatus} from "@store/user/const";


const RatingControl = withRadioGroupValue(Rating);

const AddReview = (props) => {
  const {authorizationStatus, avatar, film, onSubmitForm, formState, onControlChange, formDisabled, onDisabledChange} = props;
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
          isAuthorized={authorizationStatus === AuthorizationStatus.AUTH}
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
        onSubmit={(event) => {
          event.preventDefault();
          onSubmitForm(formState);
        }}
        onChange={(event) => {
          const isValidForm = event.currentTarget.checkValidity();
          onDisabledChange(!isValidForm);
        }}
      >
        <RatingControl
          name="rating"
          required
          defaultValue={formState.rating}
          onControlChange={(value) => onControlChange(`rating`, value)}
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
            defaultValue={formState.comment}
            onChange={(event) => onControlChange(`comment`, event.target.value)}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              style={{color: colors.invertRGBA}}
              disabled={formDisabled}
            >Post</button>
          </div>
        </div>
      </form>
    </div>
  </section>;
};

AddReview.propTypes = {
  avatar: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  film: PropTypes.shape(filmType),
  onSubmitForm: PropTypes.func.isRequired,
  formState: PropTypes.shape({
    rating: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
  formDisabled: PropTypes.bool.isRequired,
  onControlChange: PropTypes.func.isRequired,
  onDisabledChange: PropTypes.func.isRequired,
};

export default AddReview;
