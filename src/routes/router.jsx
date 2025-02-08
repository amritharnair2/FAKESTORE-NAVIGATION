import {createBrowserRouter} from "react-router-dom";
import Aboutpage, { getProductDetails } from "../pages/Productdetails";
import Userlayout from "../layouts/Userlayout";
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