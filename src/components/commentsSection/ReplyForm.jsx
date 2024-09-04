import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const ReplyForm = ({ parentId, postId }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://95.46.96.78:7777/api/v1/main/comment-create/", {
        full_name: name,
        text,
        post: postId,
        parent: parentId,
      });
      setName("");
      setText("");
    } catch (error) {
      console.error("Failed to submit reply", error);
    }
  };

  return (
    <form className="reply-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your reply"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReplyForm;
