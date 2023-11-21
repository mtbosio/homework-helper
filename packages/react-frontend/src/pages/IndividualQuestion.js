import { useParams } from "react-router-dom";
import { getQuestion } from "../apis";
import React, { useState, useEffect } from "react";

export default function IndividualQuestion() {
  const params = useParams();
  const [question, setQuestion] = useState({
    subject: "",
    title: "",
    author: "",
    body: "",
  });

  useEffect(() => {
    getQuestion(params.id)
      .then((response) => response.json())
      .then((question) => setQuestion(question));
  }, [params]);

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
      <div
        style={{
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <h3
          style={{
            margin: "0px 10px",
          }}
        >
          {question.title}
        </h3>
      </div>

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
          {question.body}
        </p>
      </div>

      {/* Footer */}
      <div>
        <p
          style={{
            margin: "3px 10px",
          }}
        >
          Subject: {question.subject} | Author: {question.author} | Votes:{" "}
          {question.votes} | Comments: 0
        </p>
      </div>
    </div>
  );
}
