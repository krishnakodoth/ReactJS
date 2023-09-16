import { useRef } from "react";
import "./App.css";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const POSTS = [
  { id: "1", title: "post 1" },
  { id: "2", title: "Post 2" },
];

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const postQuery = useQuery({
    queryKey: ["psots"],
    // queryFn: () => Promise.reject("Error Message"),
    queryFn: () => wait(1000).then(() => [...POSTS]),
  });

  const newPostMutation = useMutation({
    mutationFn: (title: string) => {
      return wait(1000).then(() =>
        POSTS.push({ id: crypto.randomUUID(), title })
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["psots"]);
    },
  });

  if (postQuery.isLoading) return <h1>Loading..</h1>;
  if (postQuery.isError) {
    return <pre>{JSON.stringify(postQuery.error)}</pre>;
  }
  console.log(POSTS);
  return (
    <>
      <h1>TanStack Query...</h1>
      {postQuery.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <input type="text" ref={inputRef} />
      <button
        disabled={newPostMutation.isLoading}
        onClick={() => newPostMutation.mutate(`${inputRef.current?.value}`)}
      >
        Add New Post
      </button>
    </>
  );
}

function wait(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
