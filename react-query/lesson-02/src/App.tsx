import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts";
import PageNotFound from "./components/Layout/PageNotFound";
import RQPostst from "./components/RQPosts";

const queryCient = new QueryClient();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/posts",
          element: <Posts />,
          /* children: [
            { index: true, element: <CoursesIndex /> },
            { path: "/courses/:id", element: <Course /> },
          ], */
        },
        { path: "/rq-posts", element: <RQPostst /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  // let element = useRoutes(routes);

  return (
    <QueryClientProvider client={queryCient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
