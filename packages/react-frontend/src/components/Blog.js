import { Link } from "react-router-dom";
import Badge from "./Badge";
import "./Blog.css";

// In the format of [text, background]
//const whiteColors = []
const redColors = ["#a12020", "#ffd4d4"];
const blueColors = ["#127fa3", "#c2f3ff"];
const greenColors = ["#26911d", "#c2ffbd"];
const yellowColors = ["#6e690f", "#fffcbd"];
const purpleColors = ["#852eb0", "#eed2fc"];
const orangeColors = ["#9c6519", "#ffe4c2"];

const subjectToColors = {
  MATH: redColors,
  ENG: blueColors,
  CSC: orangeColors,
  PHYS: purpleColors,
  ME: greenColors,
  PHIL: redColors,
  //COW: whiteColors,
};

export default function Blog(props) {
  const subjectFirstWord = props.question.subject.split(" ")[0].toUpperCase();
  const subject = props.question.subject.toUpperCase();
  let textColor, color;
  if (subjectToColors[subjectFirstWord]) {
    [textColor, color] = subjectToColors[subjectFirstWord];
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
        <Badge text={subject} textColor={textColor} color={color} />
        <Link to={`/post/${props.question._id}`}>
          <h3>{props.question.title}</h3>
        </Link>
      </div>

      <div className="blogD2">
        <p>{props.question.body}</p>
      </div>

      <div className="blogD3">
        <Badge
          text={"Comments: " + commentCount}
          textColor="#222"
          color="#F7F7F7"
        />
        <Badge text={props.question.author} textColor="#222" color="#F7F7F7" />
      </div>
    </div>
  );
}
