import React, { useState } from "react";
import { postComment } from "./apis";
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
    postComment(
      {
        body: comment.body,
        author: "Matt", //just set to prefix name until it works with oauth
      },
      props.questionID,
    )
      .then((res) => {
        console.log(res);
      })
      .catch((exception) => console.log(exception));
  }

  return (
    <>
      <div classname="postform">
        <form onSubmit={handleSubmit}>
          <br></br>
          <label>
            New Comment{" "}
            <input
              id="body"
              type="text"
              value={comment.body}
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

export default NewComment;
