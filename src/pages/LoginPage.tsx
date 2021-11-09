import FormLogin from "../components/FormLogin";
import logo from "../asserts/svg/logo.svg";

export default function LoginPage() {
  return (
    <div className="login-bg">
      <a href="/" className="logo-link">
        <img className="logo" src={logo} alt="" />
      </a>
      <FormLogin/>
      <div className="overlay"></div>
    </div>
  );
}
