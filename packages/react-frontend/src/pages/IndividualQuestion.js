import { useParams } from "react-router-dom";
import { fetchComments, getQuestion } from "../apis";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import NewComment from "../NewComment";
import "./IndividualQuestion.css";
import Blog from "../components/Blog";
import Comments from "../components/Comments";

export default function IndividualQuestion(props) {
  const params = useParams();
  const [question, setQuestion] = useState({
    subject: "",
    title: "",
    author: "",
    body: "",
    comments: 0,
    votes: 0,
  });

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getQuestion(params.id)
      .then((response) => response.json())
      .then((question) => setQuestion(question));

    fetchComments(params.id)
      .then((res) => res.json())
      .then((json) => setComments(json))
      .catch((error) => console.log(error));
  }, [params.id]);

  return (
    <>
      <Navbar userInfo={props.userInfo} setUserInfo={props.setUserInfo} />
      <div>
        <Blog question={question} commentCount={comments.length} />
        <Comments commentsData={comments} />
        <NewComment
          userInfo={props.userInfo}
          questionId={params.id}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </>
  );
}
