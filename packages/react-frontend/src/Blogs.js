import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

function Blog(props) {
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
      <Link
        to={`/post/${props.question._id}`}
        style={{
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <h3
          style={{
            margin: "0px 10px",
          }}
        >
          {props.question.title}
        </h3>
      </Link>

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
          {props.question.body}
        </p>
      </div>

      {/* Footer */}
      <div>
        <p
          style={{
            margin: "3px 10px",
          }}
        >
          Subject: {props.question.subject} | Author: {props.question.author} |
          Votes: {props.question.votes} | Comments: {props.question.comments}
          {props.question.comments.length}
        </p>
      </div>
    </div>
  );
}

function Blogs(props) {
  return (
    <div style={{ display: "block" }}>
      {props.questionsData.map((question) => (
        <Blog question={question} key={question._id} />
      ))}
    </div>
  );
}

export default Blogs;
