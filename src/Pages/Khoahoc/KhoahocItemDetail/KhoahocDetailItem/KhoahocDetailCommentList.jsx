import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
};

export default CommentList
