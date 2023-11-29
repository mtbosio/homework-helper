import "./navbar.css";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar"

function Navbar({ setQuestions }) {
  return (
    <nav>
      <div className="table">
        <div className="tr">
          <div className="topnav">
            <div className="d1">
              <a className="active" href="/">
                Homework Help
              </a>
            </div>
            <div className="d2">
              <div className="search">
                <SearchBar setQuestions={setQuestions}/>
              </div>   
            </div>
            <div className="d3">
              <Link to="/new">
                <button className="newpost">New Question</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
