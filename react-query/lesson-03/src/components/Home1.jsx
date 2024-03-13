import React from "react";
import { useQuery } from "react-query";

const Home1 = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    staleTime: Infinity,// staleTime is the length of time before your data becomes stale. The default value in React Query is staleTime: 0 - which means your data is immediately stale!
    queryFn: async () => {
      // Fetch your data here
      const response = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await response.json()
      return data;
    },
    onSuccess(rsPartnerData) {
      console.log("Home1.jsx - use Query",rsPartnerData)
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // return <div>{data}</div>;
  return <div>Home1</div>;
};

export default Home1;
