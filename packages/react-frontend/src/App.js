import "./App.css";
import React, { useState, useEffect } from "react";
import Blogs from "./Blogs";
function App() {
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    fetchProblems()
      .then((res) => res.json())
      .then((json) => setProblems(json["problem_list"]))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch calls
  function fetchProblems() {
    const promise = fetch("http://localhost:8000/problems");
    return promise;
  }

  return (
    <div className="Frontpage">
      <h1>Posts</h1>
      <Blogs problemsData={problems} />
    </div>
  );
}

export default App;
