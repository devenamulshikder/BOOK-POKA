import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/Home/Home";


 export const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement:<ErrorPage/>,
        children:[
            {
                index: true,
                element:<Home/>
            }
        ]
    }
])