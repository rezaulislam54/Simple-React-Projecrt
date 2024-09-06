import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Bokmarks from "../pages/Bokmarks";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },

            {
                path:"/blogs",
                element:<Blog></Blog>,
            },
            {
                path:'/bokmarks',
                element:<Bokmarks></Bokmarks>,
            }
        ],
    }
]) 
   

export default router;