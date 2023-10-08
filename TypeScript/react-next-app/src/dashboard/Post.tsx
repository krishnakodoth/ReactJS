"use client";
import React, { useState } from "react";

const Post = () => {
  const [title, setTitle] = useState<string | null>(null);
  const handleClick = () => {
    setTitle("Some text...");
  };
  console.log(process.env.API_URL);
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default Post;
