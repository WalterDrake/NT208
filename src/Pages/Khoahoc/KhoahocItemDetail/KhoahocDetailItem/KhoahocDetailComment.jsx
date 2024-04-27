// Comment.js
import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import moment from "moment";
const Comment = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === "") {
      alert("Bạn chưa nhập bình luận!");
    } else {
      const commentTime = {
        text: comment,
        time: moment().format("DD/MM/YY HH:mm"),
      };
      onAddComment(commentTime);
      setComment(""); // Xóa nội dung comment sau khi gửi
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-4">
      <input
        type={text}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Viết bình luận..."
        className="w-5/6 h-8"
      />
    </form>
  );
};

export default Comment;
