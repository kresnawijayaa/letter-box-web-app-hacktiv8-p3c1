import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Page Not Found</div>,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie",
        element: <Home />,
      },
      {
        path: "/movie/:slug",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
