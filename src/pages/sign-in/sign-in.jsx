import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import {TNotification} from "@store/notification/types";
import {AuthorizationStatus, UserErrorNotificationName} from "@store/user/const";
import {Redirect} from "react-router-dom";
import AppRoute from "@app/app-route";


class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._emailRef = createRef();
    this._passwordRef = createRef();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  render() {
    const {errors, authorizationStatus} = this.props;

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
          onSubmit={this._handleFormSubmit}
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
                ref={this._emailRef}
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
                ref={this._passwordRef}
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
  }

  _handleFormSubmit(event) {
    const {onFormSubmit} = this.props;
    event.preventDefault();
    onFormSubmit({
      email: this._emailRef.current.value,
      password: this._passwordRef.current.value,
    });
  }
}

SignIn.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(
      PropTypes.shape(TNotification)
  ).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default SignIn;
