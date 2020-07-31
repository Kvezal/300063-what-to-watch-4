import * as React from "react";
import {Redirect} from "react-router-dom";
import classNames from "classnames";

import AppRoute from "@app/app-route";
import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";
import {EAuthorizationStatus, EUserErrorNotificationName} from "@store/user/interface";

import {ISignInProps} from "./interface";


const SignIn: React.FC<ISignInProps> = (props: ISignInProps) => {
  const {errors, authorizationStatus, onControlChange, onFormSubmit, formState} = props;

  if (authorizationStatus === EAuthorizationStatus.AUTH) {
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
            "sign-in__field--error": errors.some((error) => error.name === EUserErrorNotificationName.EMAIL)
          })}>
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => onControlChange(`email`, event.target.value)}
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

export default SignIn;
