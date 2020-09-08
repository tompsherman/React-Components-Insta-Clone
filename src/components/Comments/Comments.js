import React from "react";
import Comment from "./Comment";
import "./Comments.css";

const Comments = (props) => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
   
      {/* map through the comments prop and render a Comment for every piece of data */}
      <div>

      {comments.map((item => {
        return <Comment comment={item.text} />;
      }))}

    </div>
  );
};

export default Comments;
