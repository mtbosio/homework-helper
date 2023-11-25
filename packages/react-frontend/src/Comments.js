import React from "react";

function Comment(props) {
  return (
    <div
      style={{
        margin: "20px auto",
        width: "640px",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        boxShadow: "0 3px 1px -1px #E5E7EB",
        padding: "0px",
      }}
    >
      {/* Title */}
      <p
        style={{
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <h3
          style={{
            margin: "0px 10px",
          }}
        >
          {props.comment.author}
        </h3>
      </p>

      {/* Question Body */}
      <div
        style={{
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <p
          style={{
            margin: "7px 10px",
          }}
        >
          {props.comment.body}
        </p>
      </div>

      {/* Footer */}
      <div>
        <p
          style={{
            margin: "3px 10px",
          }}
        >
          Date: {props.comment.date}
        </p>
      </div>
    </div>
  );
}

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
