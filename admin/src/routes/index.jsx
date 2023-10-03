import Layout from "../pages/Layout";
import Movie from "../pages/Movie";
import AddMovie from "../pages/AddMovie";
import EditMovie from "../pages/EditMovie";
import Genre from "../pages/Genre";
import AddGenre from "../pages/AddGenre";
import EditGenre from "../pages/EditGenre";
import User from "../pages/User";
import AddUser from "../pages/AddUser";
import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: <Layout />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (!access_token) {
        throw redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Movie />,
      },
      {
        path: "/movie",
        element: <Movie />,
      },
      {
        path: "/movie/add",
        element: <AddMovie />,
      },
      {
        path: "/movie/edit/:slug",
        element: <EditMovie />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/genre/add",
        element: <AddGenre />,
      },
      {
        path: "/genre/edit/:id",
        element: <EditGenre />,
      },
      {
        path: "/admin",
        element: <User />,
      },
      {
        path: "/admin/add",
        element: <AddUser />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        throw redirect("/");
      }
      return null;
    },
  },
]);

export default router;
