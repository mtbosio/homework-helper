import "./App.css";
import React, { useState, useEffect } from "react";
import Blogs from "./Blogs";
function App() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetchQuestions()
      .then((res) => res.json())
      .then((json) => setQuestions(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetch calls
  function fetchQuestions() {
    const promise = fetch("http://localhost:8000/questions");
    return promise;
  }

  return (
    <div className="Frontpage">
      <h1>Posts</h1>
      <Blogs questionsData={questions} />
    </div>
  );
}

export default App;
