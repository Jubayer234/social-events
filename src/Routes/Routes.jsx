import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";
import PrivateAbout from "../Pages/About/PrivateAbout";
import Services from "../Pages/Sevices/Services";
import PrivateService from "../Pages/Sevices/PrivateService";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/cards.json'),
                
            },
            {
                path: '/about',
                element: <PrivateAbout><About></About></PrivateAbout>
                
            },
            {
                path: '/services',
                element: <PrivateService><Services></Services></PrivateService>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/cards.json')
                
            }
        ]
    }
]);
export default router;