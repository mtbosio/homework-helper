import React from "react";

function Title() {
  return <h4>I have a problem with Calc 2</h4>;
}

function Date() {
  return <h5>2023-10-10</h5>;
}

function Time() {
  return <h5>10:00 pm</h5>;
}

function Author() {
  return <h5>By: Charles</h5>;
}

function Body() {
  return <p>Im having trouble with problem 5</p>;
}

function Votes() {
  return <h5>👍 5 | 👎 3</h5>;
}

function Comment() {
  return <h6>Comment1</h6>;
}

function Blogs() {
  return (
    <div className="Blog">
      <Title />
      <Date />
      <Time />
      <Author />
      <Body />
      <Votes />
      <Comment />
      <Comment />
    </div>
  );
}

export default Blogs;
