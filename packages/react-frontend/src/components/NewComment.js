import React, { useState } from "react";
import { postComment } from "../apis";
import "./NewComment.css";

function NewComment(props) {
  const [comment, setComment] = useState({
    body: "",
  });

  function handleChange(event) {
    setComment((values) => ({
      ...comment,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    postComment(
      { body: comment.body },
      props.questionId,
      props.userInfo.credential,
    )
      .then((res) => res.json())
      .then((res) => props.setComments([...props.comments, res]))
      .then((res) => {
        comment.body = "";
      })
      .catch((exception) => console.log(exception));
  }

  return (
    <>
      <div className="postform">
        <form onSubmit={handleSubmit} autoComplete="off">
          <h3>New Comment </h3>
          <textarea
            id="body"
            value={comment.body}
            onChange={handleChange}
            rows={5}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </>
  );
}

export default NewComment;
