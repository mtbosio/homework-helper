import "./navbar.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { login, logout } from "./apis.js";
import { useState } from "react";

const UserInfo = (props) => {
  const [name, setName] = useState();

  const onLogin = (response) => {
    login(response.credential)
      .then((res) => res.json())
      .then((json) => {
        setName(json.name);
      })
      .catch((err) => console.log(err));
  };

  const onLoginError = (response) => {
    console.log(response);
  };

  const onLogout = () => {
    logout()
      .then(setName(undefined))
      .catch((err) => console.log(err));
  };

  if (name) {
    return <button onClick={onLogout}>{name}: Logout</button>;
  } else {
    return (
      <GoogleLogin
        onSuccess={onLogin}
        onError={onLoginError}
        shape="circle"
        size="medium"
      />
    );
  }
};

const Navbar = () => {
  return (
    <nav>
      <div class="table">
        <div class="tr">
          <div class="topnav">
            <div class="d1">
              <a class="active" href="/">
                Homework Help
              </a>
            </div>
            <div class="d2">
              <input type="text" placeholder="Search"></input>
            </div>
            <div class="d3">
              <Link to="/new">
                <button class="newpost">New Question</button>
              </Link>
              <UserInfo />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
