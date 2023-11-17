import React, { useState } from "react";
import { postQuestion } from "../apis";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import "./NewQuestion.css";

function NewQuestion() {
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
      author: question.author,
      body: question.body,
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((exception) => console.log(exception));
  }

  return (
    <>
      <Navbar navbar>navbar</Navbar>
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
            Name{" "}
            <input
              id="author"
              type="text"
              value={question.author}
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
