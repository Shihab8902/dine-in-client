import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SingleFood from "../pages/SingleFood/SingleFood";
import axios from "axios";
import MyAdd from "../pages/MyAdd/MyAdd";
import AddFood from "../pages/AddFood/AddFood";
import PrivateRoute from "../hooks/PrivateRoute";
import UpdateFood from "../pages/UpdateFood/UpdateFood";
import Foods from "../pages/Foods/Foods";
import PurchaseFood from "../pages/PurchaseFood/PurchaseFood";
import MyOrder from "../pages/MyOrder/MyOrder";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/foods",
                element: <Foods />
            },
            {
                path: "/food/:id",
                element: <SingleFood />,
                loader: ({ params }) => axios.get(`https://dinein-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/myAdd",
                element: <PrivateRoute>
                    <MyAdd />
                </PrivateRoute>
            },
            {
                path: "/addFood",
                element: <PrivateRoute>
                    <AddFood />
                </PrivateRoute>
            },
            {
                path: "/updateFood/:id",
                element: <PrivateRoute>
                    <UpdateFood />
                </PrivateRoute>,
                loader: ({ params }) => axios.get(`https://dinein-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/purchase/:id",
                element: <PrivateRoute>
                    <PurchaseFood />
                </PrivateRoute>,
                loader: ({ params }) => axios.get(`https://dinein-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/myOrder",
                element: <PrivateRoute>
                    <MyOrder />
                </PrivateRoute>
            },
            {
                path: "/blog",
                element: <Blogs />
            }
        ]
    }
])