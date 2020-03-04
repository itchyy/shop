import React from "react";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "./SignInSignUp.styles.scss";

const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
