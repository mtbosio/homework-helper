import { useEffect, React } from "react";
import Comments from "../Comments";
import { fetchComments } from "../apis";

function CommentCatalog(props) {
  let setComments = props.setComments;
  let questionId = props.questionId;

  useEffect(() => {
    fetchComments(questionId)
      .then((res) => res.json())
      .then((json) => setComments(json))
      .catch((error) => {
        console.log(error);
      });
  }, [setComments, questionId]);

  return (
    <div className="Frontpage">
      <Comments commentsData={props.comments} />
    </div>
  );
}

export default CommentCatalog;
