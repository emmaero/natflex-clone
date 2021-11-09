import fbIcon from "../asserts/icons/facebook.png";
import { Link } from "react-router-dom";

export default function LoginFormDetails() {
  return (
    <>
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
    </>
  );
}
