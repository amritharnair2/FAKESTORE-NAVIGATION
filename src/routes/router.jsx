import {createBrowserRouter} from "react-router-dom";
import Homepage from "../pages/HomePage";
import Aboutpage, { getProductDetails } from "../pages/Productdetails";
import Userlayout from "../layouts/Userlayout";
import Productdetails from "../pages/Productdetails";
import Productlayout from "../layouts/Productlayout";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout/>
    },
    {
      path: "productdetails/:id",
      element: <Productlayout/>,
      loader: getProductDetails
    }
  ]);