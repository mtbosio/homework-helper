import React from "react";
import Comment from "./Comment";

function Comments(props) {
  return (
    <div style={{ display: "block" }}>
      {props.commentsData.map((comment) => (
        <Comment comment={comment} />
      ))}
    </div>
  );
}

export default Comments;
