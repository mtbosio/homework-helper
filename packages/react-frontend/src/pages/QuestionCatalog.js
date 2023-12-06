import React, { useState, useEffect } from "react";
import { fetchQuestions } from "../apis";
import Navbar from "../components/navbar";
import Blog from "../components/Blog";

function Blogs(props) {
  return (
    <div style={{ display: "block" }}>
      {props.questionsData.map((question) => (
        <Blog question={question} key={question._id} />
      ))}
    </div>
  );
}

function QuestionCatalog(props) {
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
      <Navbar
        navbar
        setQuestions={setQuestions}
        userInfo={props.userInfo}
        setUserInfo={props.setUserInfo}
      >
        navbar
      </Navbar>
      <Blogs questionsData={questions} />
    </div>
  );
}

export default QuestionCatalog;
