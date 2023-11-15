import "./navbar.css";
import { Link } from "react-router-dom";


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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
