import { useState } from "react";
import logo from "../../asserts/svg/logo.svg";
import { useUser } from "../../states/UserProvider";
import DropIcon from "../icons/DropIcon";
import SearchIcon from "../icons/SearchIcon";
import Logout from "../shared/Logout";
import userLogo from "../../asserts/images/nexflix-user.png";

interface iProp {
  state: [getter: string, setter: Function];
}
export default function UserNavigation({ state }: iProp) {
  const [getter, setter] = state;
  const { user } = useUser();
  const [showInput, setShowInput] = useState(false);

  return (
    <nav className="user-nav">
      <a href="/" id="logo">
        <img src={logo} alt="natflex" />
      </a>

      <div className="left-menu">
        <a href="/">Home</a>
        <a href="/">Series</a>
        <a href="/">Films</a>
      </div>
      <div className="right-menu">
        <label className="search-label">
          {showInput ? (
            <input
              onChange={(event) => setter(event.target.value)}
              type="text"
              placeholder="titles"
            />
          ) : (
            ""
          )}
          <button onClick={() => setShowInput(!showInput)}>
            <SearchIcon />
          </button>
        </label>

        <div className="user">
          <div className="user-icon">
            <img src={userLogo} alt="netflix" />
            <DropIcon />
          </div>
          <div className="user-links">
            <ul>
              <li>{user.name}</li>
              <li>
                <Logout />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
