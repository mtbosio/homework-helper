import React from "react";

function Title(props) {
  return <h1>{props.problem.title}</h1>;
}

function Date(props) {
  return <h5>{props.problem.date}</h5>;
}

function Time(props) {
  return <h5>{props.problem.time}</h5>;
}

function Author(props) {
  return <h5>{props.problem.author}</h5>;
}

function Body(props) {
  return <p>{props.problem.body}</p>;
}

function Votes(props) {
  return <h5>{props.problem.votes}</h5>;
}

function Comment() {
  return <h6>Comment1</h6>;
}
function Blogs(props) {
  return (
    <div>
      {props.problemsData.map((problem) => (
        <div>
          <Title problem={problem} />
          <Date problem={problem} />
          <Time problem={problem} />
          <Author problem={problem} />
          <Body problem={problem} />
          <Votes problem={problem} />
          <Comment />
          <Comment />
        </div>
      ))}
    </div>
  );
}

export default Blogs;
