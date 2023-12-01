import React, { useState } from "react";
import { postQuestion } from "../apis";
import { useNavigate } from "react-router-dom";
import "./NewQuestion.css";
import Navbar from "../navbar";

function NewQuestion(props) {
  const navigate = useNavigate();
  const [question, setQuestion] = useState({
    subject: "",
    title: "",
    author: "",
    body: "",
  });

  function handleChange(event) {
    setQuestion((values) => ({
      ...question,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    postQuestion({
      subject: question.subject,
      title: question.title,
      body: question.body,
    }, props.userInfo.credential)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((exception) => console.log(exception));
  }

  return (
    <>
      <Navbar userInfo={props.userInfo} setUserInfo={props.setUserInfo} />
      <div classname="postform">
        <form onSubmit={handleSubmit}>
          <label>
            Title{" "}
            <input
              id="title"
              type="text"
              value={question.title}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Subject{" "}
            <input
              id="subject"
              type="text"
              value={question.subject}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            Question{" "}
            <input
              id="body"
              type="text"
              value={question.body}
              onChange={handleChange}
            />
          </label>
          <br></br>
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}

export default NewQuestion;
