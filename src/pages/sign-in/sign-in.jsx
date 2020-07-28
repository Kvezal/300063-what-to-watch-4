import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import {TNotification} from "@store/notification/types";
import {AuthorizationStatus, UserErrorNotificationName} from "@store/user/const";
import {Redirect} from "react-router-dom";
import AppRoute from "@app/app-route";


const SignIn = (props) => {
  const {errors, authorizationStatus, onControlChange, onFormSubmit, formState} = props;

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={AppRoute.ROOT}/>;
  }

  return <div className="user-page">
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>

    <div className="sign-in user-page__content">
      <div className={classNames({
        "sign-in__message": true,
        "visually-hidden": !errors.length,
      })}>
        <p>Please enter a valid email address</p>
      </div>
      <form
        action="#"
        className="sign-in__form"
        onSubmit={(event) => {
          event.preventDefault();
          onFormSubmit(formState);
        }}
      >
        <div className="sign-in__fields">
          <div className={classNames({
            "sign-in__field": true,
            "sign-in__field--error": errors.some((error) => error.name === UserErrorNotificationName.EMAIL)
          })}>
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              onChange={(event) => onControlChange(`email`, event.target.value)}
              value={formState.email}
              required
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-email"
            >
              Email address
            </label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              onChange={(event) => onControlChange(`password`, event.target.value)}
              value={formState.password}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-password"
            >
              Password
            </label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">Sign in</button>
        </div>
      </form>
    </div>
    <Footer/>
  </div>;
};

SignIn.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(
      PropTypes.shape(TNotification)
  ).isRequired,
  formState: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onControlChange: PropTypes.func.isRequired,
};

export default SignIn;
