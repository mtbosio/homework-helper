import "./navbar.css";
import { Link } from "react-router-dom";
import { SearchBar } from "./components/SearchBar"
import { useState } from "react";
import { SearchResults } from "./components/SearchResults";

function Navbar() {
  const [results, setResults] = useState([]);
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
              <div className="search">
                <SearchBar setResults={setResults}/>
                {results && results.length > 0 && <SearchResults results={results}/>}
              </div>   
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
