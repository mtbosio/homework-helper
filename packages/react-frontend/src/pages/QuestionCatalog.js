import React, { useState, useEffect } from "react";
import Blogs from "../Blogs";
import { fetchQuestions } from "../apis";
import { Link } from "react-router-dom";
import Navbar from "../navbar";

function QuestionCatalog() {
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
      <Navbar navbar>navbar</Navbar>
      <h1>Posts</h1>
      <Blogs questionsData={questions} />
    </div>
  );
}

export default QuestionCatalog;
