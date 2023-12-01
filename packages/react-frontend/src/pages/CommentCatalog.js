import { useState, useEffect, React } from "react";
import Comments from "../Comments";
import NewComment from "../NewComment";
import { fetchComments } from "../apis";

function CommentCatalog(props) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchComments(props.questionId)
      .then((res) => res.json())
      .then((json) => setComments(json))
      .catch((error) => {
        console.log(error);
      });
  }, [props.questionId]);

  return (
    <div className="Frontpage">
      <Comments commentsData={comments} />
      <NewComment userInfo={props.userInfo} questionId={props.questionId} comments={comments} setComments={setComments}/>
    </div>
  );
}

export default CommentCatalog;
