import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login-Registration/Login";
import Registration from "../Login-Registration/Registration";
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
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/courses`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Registration></Registration>
      },
    ],
  },
]);