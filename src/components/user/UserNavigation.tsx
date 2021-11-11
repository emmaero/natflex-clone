import logo from "../../asserts/svg/logo.svg";
import UserIcon from "../icons/UserIcon";
import Logout from "../shared/Logout";

export default function UserNavigation() {
  return (
    <nav>
      <a href="#" id="logo">
        <img src={logo} />
      </a>

      <div className="left-menu">
        <a href="#">
          Home<i className="fa fa-caret-down"></i>
        </a>
        <a href="">Series</a>
        <a href="">Films</a>
      </div>
      <div className="right-menu">
        <h5>
          <i className="fa fa-search"></i>Search
        </h5>
        <div className="user">
          <UserIcon />
          <h5>
            John<i className="fa fa-caret-down"></i>
          </h5>
          <Logout />
        </div>
      </div>
    </nav>
  );
}
