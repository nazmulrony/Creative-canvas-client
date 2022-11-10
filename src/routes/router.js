import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddService from "../pages/AddService";
import Blogs from "../pages/Blogs";
import Error404 from "../pages/Error404";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import EditReview from "../pages/MyReviews/EditReview";
import MyReviews from "../pages/MyReviews/MyReviews";

import Register from "../pages/Register";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blogs',
                element: <Blogs />
            },
            {
                path: '/add-service',
                element: <AddService />
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/reviews/:id',
                element: <EditReview />,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },

        ]
    },
    {
        path: '/*',
        element: <Error404 />
    }
])