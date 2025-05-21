import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Components/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import ShareTip from "../Pages/ShareTip";
import MyTips from "../Pages/MyTips";
import ExploreGardeners from "../Pages/ExploreGardeners";
import Loading from "../Pages/Loading";
import NotFound from "../Pages/NotFound";
import BrowseTips from "../Pages/BrowseTips";
import TipDetails from "../Pages/TipDetails";
import UpdateTip from "../Pages/UpdateTip";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: "/share-tip",
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path:"/gardeners",
        Component:ExploreGardeners,
        loader:()=>fetch("http://localhost:3000/gardeners"),
        hydrateFallbackElement:<Loading></Loading>,
      },
      {
        path:"/browse-tips",
        Component:BrowseTips
      },
      {
         path:"/tip-details/:id",
         element:<PrivateRoute><TipDetails></TipDetails></PrivateRoute>
      },
      {
        path: "/my-tips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path:"/update-tip/:id",
        element:<PrivateRoute><UpdateTip></UpdateTip></PrivateRoute>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path:"/*",
    Component:NotFound
  }
]);

export default router;
