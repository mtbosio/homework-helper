import React, { useState } from "react";
import { postQuestion } from "../apis";
import { useNavigate } from "react-router-dom";
import "./NewQuestion.css";
import Navbar from "../components/Navbar";

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
    postQuestion(
      {
        subject: question.subject,
        title: question.title,
        body: question.body,
      },
      props.userInfo.credential,
    )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((exception) => console.log(exception));
  }

  return (
    <>
      <Navbar userInfo={props.userInfo} setUserInfo={props.setUserInfo} />
      <div className="postQuestion">
        <div className="postQuestionHeader">
          <h1>New Question</h1>
        </div>
        <div className="postQuestionContent">
          <form onSubmit={handleSubmit} autoComplete="off">
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
              Question{" "}
              <textarea
                id="body"
                value={question.body}
                onChange={handleChange}
                rows={7}
              />
            </label>
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewQuestion;
