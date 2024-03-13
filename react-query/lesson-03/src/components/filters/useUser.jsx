import React from 'react';
import { useQuery,useQueryClient } from 'react-query';

const useUser = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries_inside_hook"],
    staleTime: Infinity,
    queryFn: async () => {
    console.log("fetch Data")
    // Fetch your data here
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
  },
  onSuccess(rsPartnerData) {
    console.log("useUser custome hook",rsPartnerData)
  }
});

  

  const fetchAgain = () => {
    queryClient.invalidateQueries('countries_inside_hook');
  }

  return {data, isLoading, error,fetchAgain}
}

export default useUser