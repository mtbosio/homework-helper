import { useParams } from "react-router-dom";
import { getQuestion } from "../apis";
import React, { useState, useEffect } from "react";
import CommentCatalog from "../components/CommentCatalog";
import Navbar from "../components/navbar";
import NewComment from "../NewComment";
import "./IndividualQuestion.css";
import Blog from "../components/Blog";

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
  }, [params.id]);

  return (
    <>
      <Navbar userInfo={props.userInfo} setUserInfo={props.setUserInfo} />
      <div>
        <Blog question={question} commentCount={comments.length}/>
        <CommentCatalog
          userInfo={props.userInfo}
          questionId={params.id}
          comments={comments}
          setComments={setComments}
        />
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
