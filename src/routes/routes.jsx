import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login-Registration/Login";
import Registration from "../Login-Registration/Registration";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import RightSide from "../pages/Courses/RightSide";
import Home from "../pages/Home/Home";
import Details from "../pages/Courses/Details";
import FAQ from "../pages/FAQ/FAQ";
import Error from "../pages/Error/Error";
import Enroll from "../Login-Registration/Enroll";
import PrivateRoute from '../routes/PrivateRoute'



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://edu-server-site.vercel.app/courses"),
        children: [
          {
            path: "/courses/:id",
            element: <RightSide></RightSide>,
            loader: ({ params }) =>
              fetch(`https://edu-server-site.vercel.app/courses/${params.id}`),
          },
          {
            path: ":id/:url",
            element: <Details></Details>,
            loader: ({ params }) =>
              fetch(`https://edu-server-site.vercel.app/courses/${params.url}`),
          },
        ],
      },

      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "enroll",
        element: (
          <PrivateRoute>
            <Enroll></Enroll>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
  },
]);