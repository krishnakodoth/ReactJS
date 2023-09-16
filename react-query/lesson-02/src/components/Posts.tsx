// @ts-nocheck
import axios from "axios";
import { useState, useEffect } from "react";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/posts/").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>Posts</h2>
      {data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </>
  );
};

export default Posts;
