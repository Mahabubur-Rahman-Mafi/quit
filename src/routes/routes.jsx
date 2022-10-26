import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Home from "../pages/Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/courses`),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);