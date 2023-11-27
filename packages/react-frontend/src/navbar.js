import "./navbar.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const UserInfo = (props) => {

  const onLoginError = (response) => {
    console.log(response);
  };

  if (props.name) {
    return <button onClick={props.onLogout}>{props.name}: Logout</button>;
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
  return (
    <nav>
      <div class="table">
        <div class="tr">
          <div class="topnav">
            <div class="d1">
              <Link class="active" to="/">
                Homework Help
              </Link>
            </div>
            <div class="d2">
              <input type="text" placeholder="Search"></input>
            </div>
            <div class="d3">
              <Link to="/new">
                <button class="newpost">New Question</button>
              </Link>
              <UserInfo onLogin={props.onLogin} onLogout={props.onLogout} name={props.name}/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
