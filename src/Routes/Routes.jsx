import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/cards.json'),
                
            },
            {
                path: '/about',
                
            },
            {
                path: '/register'
            }
        ]
    }
]);
export default router;