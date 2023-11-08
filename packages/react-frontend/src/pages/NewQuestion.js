import React, { useState } from "react";
import { postQuestion } from "../apis";

function NewQuestion() {
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
      body: question.body
    })
      .then((res) => console.log(res))
      .catch((exception) => console.log(exception));
  }

  return (
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
  );
}

export default NewQuestion;
