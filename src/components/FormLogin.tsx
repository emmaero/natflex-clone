import { useState } from "react";
import fields from "../data/field-login.json";
import InputField from "./shared/InputField";
import fbIcon from "../asserts/icons/facebook.png";
import { Link } from "react-router-dom";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-body">
      <div className="login">
        <h1 className="login__title">Sign In</h1>
        <InputField state={[email, setEmail]} options={fields.email} />
        <InputField state={[password, setPassword]} options={fields.password} />
        <button className="login__sign-in" type="button">
          Sign In
        </button>
        <div className="login__secondary-cta">
          <a className="login__secondary-cta__text" href="/">
            <input
              type="checkbox"
              className=""
              name="rememberMe"
              id="id_rememberMe"
              value="true"
            />
            Remember me
          </a>
          <a
            className="login__secondary-cta__text login__secondary-cta__text--need-help"
            href="/"
          >
            Need help?
          </a>
        </div>
        <div className="fb-login">
          <img className="icon-facebook" src={fbIcon} alt="freepik" />
          <span className="fb-text">Login with Facebook</span>
        </div>
        <div className="login__signup-now">
          New to Netflix? &nbsp;
          <Link to="/sign-up" className="login__signup-now__link" href="/">
            Sign up now.
          </Link>
        </div>
        <div className="recaptcha-terms-of-use">
          <p>
            <span>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </span>
            &nbsp;
            <button className="recaptcha-terms-of-use--link-button">
              Learn more.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
