// @ts-nocheck
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = () => axios.get("http://localhost:4000/posts/");

const RQPostst = () => {
  /* const { isLoading, data } = useQuery("posts", () => {
    return axios.get("http://localhost:4000/posts/");
  }); */

  const { isLoading, data } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2>Posts</h2>
      {data?.data.map((post) => {
        return <div key={post.id}>{post.title}</div>;
      })}
    </>
  );
};

export default RQPostst;
