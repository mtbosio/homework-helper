import { Link } from "react-router-dom";
import "./Blog.css";
import "./Badge.css";

// In the format of [text, background]
const redColors = ["#a12020", "#ffd4d4"];
const blueColors = ["#127fa3", "#c2f3ff"];
const greenColors = ["#26911d", "#c2ffbd"];
const yellowColors = ["#6e690f", "#fffcbd"];
const purpleColors = ["#852eb0", "#eed2fc"];
const orangeColors = ["#9c6519", "#ffe4c2"];

const subjectToColors = {
  "MATH": redColors,
  "ENG": blueColors,
  "CSC": orangeColors,
  "PHYS": purpleColors,
  "ME": greenColors,
}

function Badge(props) {
  return (<div className="badge" style={{backgroundColor: props.color}}>
    <p style={{color: props.textColor}}>{props.text}</p>
  </div>)
}

export default function Blog(props) {

  const subject = props.question.subject.toUpperCase();
  let textColor, color;
  if (subjectToColors[subject]) {
    [textColor, color] = subjectToColors[subject];
  } else {
    [textColor, color] = yellowColors;
  }

  let commentCount;
  if (props.commentCount === undefined) {
    commentCount = props.question.comments;
  } else {
    commentCount = props.commentCount;
  }

  return (
    <div className="blogDiv">
      <div className="blogD1">
        <Badge text={subject} textColor={textColor} color={color}/>
        <Link to={`/post/${props.question._id}`}>
          <h3>
            {props.question.title}
          </h3>
        </Link>
      </div>

      <div className="blogD2">
        <p>
          {props.question.body}
        </p>
      </div>

      <div className="blogD3">
        <p>
          {props.question.author} |
          Votes: {props.question.votes} | Comments: {commentCount}
        </p>
      </div>
    </div>
  );
}