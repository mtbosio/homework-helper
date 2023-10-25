import React from "react";

function Title() {
  return <p>I have a problem with Calc 2</p>;
}

function Date() {
  return <p>2023-10-10</p>;
}

function Time() {
  return <p>10:00 pm</p>;
}

function Author() {
  return <p>Charles</p>;
}

function Content() {
  return <p>Im having trouble with problem 5</p>;
}

function Votes() {
  return <p>Up 5 | Down 3</p>;
}

function Blogs() {
  return (
    <div className="Blog">
      <Date />
      <Time />
      <Author />
      <Content />
      <Votes />
    </div>
  );
}

export default Blogs;
