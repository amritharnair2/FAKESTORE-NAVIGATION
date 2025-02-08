import {createBrowserRouter} from "react-router-dom";
import Userlayout from "../layouts/Userlayout";
import Productlayout from "../layouts/Productlayout";
  
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout/>
    },
    {
      path: "Productdetails/:id",
      element: <Productlayout/>,
    }
  ]);
