import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./src/components/Profile";
import Shimmer from "./src/components/Shimmer";



const Instamart = lazy(()=> import("./src/components/Instamart"));

const AppLayout = () =>{
    return(
        <>
        <div className="app">
            <Header/>
            <Outlet />
            <Footer/>
        </div>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
       path: "/",
       element : <AppLayout />,
       errorElement :<Error />,
       children: [
        {
            path: "/about",
            element : <About />,
            children:[
                {
                    path:"profile",
                    element :<Profile />
                },
            ],
        },
        {
            path: "/contact",
            element : <Contact />,
        },
        {
            path: "/",
            element : <Body />,
        },
        {
            path: "/restaurant/:id",
            element : <RestaurantMenu />
        },
        {
            path: "/instamart",
            element :( 
            <Suspense  fallback={<Shimmer />}>
                <Instamart />
            </Suspense>
            )
        },
       ],
    }, 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {appRouter}></RouterProvider>);