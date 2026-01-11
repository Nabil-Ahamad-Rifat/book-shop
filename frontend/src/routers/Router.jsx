import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import axios from 'axios';
import App from "../App";
import Home from "../page/Home/Home";
import Shop from "../page/shop/Shop";
import SingleBook from "../component/SingleBook";
import About from "../component/About";
import Blog from "../component/Blog";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import Editebook from "../dashboard/Editebook";
import Help from "../dashboard/Help"; // Import Help
import Signup from "../component/Signup";
import Login from "../component/Login";
import PriveteRouting from "../PrivetRoute/PriveteRouting";
import Logout from "../component/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PriveteRouting><Dashboard /></PriveteRouting>,
      }, {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBook />
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <Editebook />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/book/${params.id}`),

      },
      {
        path: "/admin/dashboard/help",
        element: <Help />
      }
    ],
  },
  {
    path: "/sign-up",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  }
]);


export default router;
