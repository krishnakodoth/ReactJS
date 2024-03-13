import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [selectedPost,setSelectedPost] = useState("");

  const getPosts = (post) => <option key={post.id} value={post.id}>{post.title}</option>;

  useEffect(() => {
    console.log("useEffect...")
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));      
  }, []);


  useEffect(() => {
    console.log("useEffect on post selection", selectedPost)
  }, [selectedPost]);


  if (posts.length <= 0) {
    return <p>Loading..</p>;
  }

  return (
    <div style={{display:'flex'}}>
      <select
      onChange={(e)=>setSelectedPost(e.target.value)}
      >{posts.map(getPosts)}</select>
      
      
    </div>
  );
};

export default Posts;
