import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Bokmarks from "../pages/Bokmarks";
import Blogs from "../pages/Blogs";
import BlogCart from "../components/BlogCart";
import Contant from "../components/Contant";
import Author from "../components/Author";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles?per_page=25&top=5"),
      },

      {
        path: "/blogs/:id",
        element: <BlogCart></BlogCart>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Contant></Contant>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },

          {
            path: "author",
            element: <Author></Author>,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },
      {
        path: "/bokmarks",
        element: <Bokmarks></Bokmarks>,
      },
    ],
  },
]); 
   

export default router;