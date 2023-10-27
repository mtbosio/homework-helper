import React from "react";

function Title(props) {
  return <h1>{props.question.title}</h1>;
}

function Date(props) {
  return <h5>{props.question.date}</h5>;
}

function Time(props) {
  return <h5>{props.question.time}</h5>;
}

function Author(props) {
  return <h5>{props.question.author}</h5>;
}

function Body(props) {
  return <p>{props.question.body}</p>;
}

function Votes(props) {
  return <h5>{props.question.votes}</h5>;
}

function Comment() {
  return <h6>Comment1</h6>;
}
function Blogs(props) {
  return (
    <div>
      {props.questionsData.map((question) => (
        <div>
          <Title question={question} />
          <Date question={question} />
          <Time question={question} />
          <Author question={question} />
          <Body question={question} />
          <Votes question={question} />
          <Comment />
          <Comment />
        </div>
      ))}
    </div>
  );
}

export default Blogs;
