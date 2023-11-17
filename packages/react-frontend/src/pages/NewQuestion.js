import React, { useState } from "react";
import { postQuestion } from "../apis";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

function NewQuestion() {
  const navigate = useNavigate();
=======
import Navbar from "../navbar";
import "./NewQuestion.css";

function NewQuestion() {
>>>>>>> 831a4a08 (frontend stuff)
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
<<<<<<< HEAD
      body: question.body,
    })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
=======
      body: question.body
    })
      .then((res) => console.log(res))
>>>>>>> 831a4a08 (frontend stuff)
      .catch((exception) => console.log(exception));
  }

  return (
<<<<<<< HEAD
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
      <label>
        Subject{" "}
        <input
          id="subject"
          type="text"
          value={question.subject}
          onChange={handleChange}
        />
      </label>
      <label>
        Name{" "}
        <input
          id="author"
          type="text"
          value={question.author}
          onChange={handleChange}
        />
      </label>
      <label>
        Question{" "}
        <input
          id="body"
          type="text"
          value={question.body}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Post</button>
    </form>
=======
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
>>>>>>> 831a4a08 (frontend stuff)
  );
}

export default NewQuestion;
