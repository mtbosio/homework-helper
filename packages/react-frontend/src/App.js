import React, { useState, useEffect } from "react";
import Blogs from "./Blogs";
import { fetchQuestions } from "./apis";

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

  return (
    <div className="Frontpage">
      <h1>Posts</h1>
      <Blogs questionsData={questions} />
    </div>
  );
}

export default App;
