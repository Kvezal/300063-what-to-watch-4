import React from "react";
import PropTypes from "prop-types";

import Logo from "@components/logo/logo";
import User from "@components/user/user";
import {filmType} from "@common/types";
import {getColorParams} from "@common/utils";
import Breadcrumbs from "@components/breadcrumbs/breadcrumbs";


const AddReview = (props) => {
  const {isAuthorized, avatar, film} = props;
  if (!film) {
    return null;
  }
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
          avatar={avatar}
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
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>
          </div>
        </div>

        <div className="add-review__text" style={{background: colors.RGBAWithOffset}}>
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              style={{color: colors.invertRGBA}}
            >Post</button>
          </div>

        </div>
      </form>
    </div>
  </section>;
};

AddReview.propTypes = {
  avatar: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  film: PropTypes.shape(filmType)
};

export default AddReview;
