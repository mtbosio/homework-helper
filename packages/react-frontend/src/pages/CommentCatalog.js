import { useState, useEffect, React } from "react";
import Comments from "../Comments";
import { fetchComments } from "../apis";
function CommentCatalog(props) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments(props.questionID)
      .then((res) => res.json())
      .then((json) => setComments(json))
      .catch((error) => {
        console.log(error);
      });
  }, [props.questionID]);

  return (
    <div className="Frontpage">
      <Comments commentsData={comments} />
    </div>
  );
}

export default CommentCatalog;
