import "./Navbar.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { SearchBar } from "./SearchBar";
import { verifyCredentials } from "../apis";
import { useState } from "react";

const UserInfo = (props) => {
  function onLoginError(response) {
    console.log(response);
  }

  const [isHovering, setIsHovering] = useState(false);

  function onMouseEnter() {
    setIsHovering(true);
  }

  function onMouseLeave() {
    setIsHovering(false);
  }

  if (props.name) {
    return (
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="navbutton"
        onClick={(val) => {
          props.onLogout(val);
          setIsHovering(false);
        }}
      >
        {(isHovering && "Logout") || props.name}
      </button>
    );
  } else {
    return (
      <GoogleLogin
        onSuccess={props.onLogin}
        onError={onLoginError}
        shape="circle"
        size="medium"
      />
    );
  }
};

const Navbar = (props) => {
  function onLogin(response) {
    verifyCredentials(response.credential)
      .then((res) => res.json())
      .then((res) =>
        props.setUserInfo({
          name: res.name,
          credential: response.credential,
        }),
      );
  }

  function onLogout(response) {
    props.setUserInfo({
      name: undefined,
      credential: undefined,
    });
  }

  return (
    <nav>
      <div className="table">
        <div className="tr">
          <div className="topnav">
            <div className="d1">
              <Link className="active" to="/">
                Homework Help
              </Link>
            </div>
            <div className="d2">
              <div className="search">
                <SearchBar setQuestions={props.setQuestions} />
              </div>
            </div>
            <div className="d3">
              {props.userInfo.name !== undefined && (
                <Link to="/new">
                  <button className="navbutton">New Question</button>
                </Link>
              )}
              <UserInfo
                onLogin={onLogin}
                onLogout={onLogout}
                name={props.userInfo.name}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
