import logo from "../../asserts/svg/logo.svg";
import { useUser } from "../../states/UserProvider";
import DropIcon from "../icons/DropIcon";
import UserIcon from "../icons/UserIcon";
import Logout from "../shared/Logout";

export default function UserNavigation() {
  const { user } = useUser();
  return (
    <nav>
      <a href="/" id="logo">
        <img src={logo} alt="natflex" />
      </a>

      <div className="left-menu">
        <a href="/">Home</a>
        <a href="/">Series</a>
        <a href="/">Films</a>
      </div>
      <div className="right-menu">
        <h5>
          <i className="fa fa-search"></i>Search
        </h5>
        <div className="user">
          <div className="user-icon">
            <UserIcon />
            <DropIcon />
          </div>
          <div className="user-links">
            <ul>
              <li>{user.name}</li>
            </ul>
            <Logout />
          </div>
        </div>
      </div>
    </nav>
  );
}
