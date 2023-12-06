import "./Comment.css";

export default function Comment(props) {
  const date = new Date(props.comment.date);

  return (
    <div className="commentDiv">
      <div className="commentD1">
        <h3>{props.comment.author}</h3>
      </div>
      <div className="commentD2">
        <p>{props.comment.body}</p>
      </div>

      <div className="commentD3">
        <p>{date.toLocaleString()}</p>
      </div>
    </div>
  );
}
