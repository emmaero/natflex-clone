import { Link } from "react-router-dom";
import logo from "../asserts/svg/logo.svg";

export default function NavPageSignUp() {
  return (
    <nav className="nav-sign-up">
      <div className="nav-sign-up__body">
        <a href="/" className="logo-link">
          <img className="logo" src={logo} alt="" />
        </a>
        <Link className="nav-sign-up__sign-in" to="/">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
