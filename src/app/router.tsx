import { createBrowserRouter } from "react-router-dom";
import { CreateProduct } from "../pages/CreateProduct/CreateProduct";
import { Inventory } from "../pages/Inventory/Inventory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Inventory />,
  },
  {
    path: "/product-create",
    element: <CreateProduct />,
  },
]);
