import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import resData from "../Utils/resData.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rescard from "./Components/Rescard";
import Search from "./Components/Search";
import Shimer from "./Components/Shimer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Body from "./Components/Body";
import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import ErrorPage from "./Components/ErrorPage";
import Admin from "./Components/Admin";
import RestaurentMenu from "./Components/RestaurentMenu";

function App() {
 
 const Approuter = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'services',
        element:<Services/>
      },

      {
        path:'restaurent/:resId',
        element:<RestaurentMenu/>
      }

    ],
    errorElement:<ErrorPage/>
    
  },

 
 ])
  

  return (
    <>
     
     
     <RouterProvider router={Approuter} />
      
    </>
  );
}

export default App;
