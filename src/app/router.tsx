import {createBrowserRouter} from "react-router-dom";
import {Inventory} from "../pages/Inventory";
import {CreateProduct} from "../pages/CreateProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Inventory/>,
    },
    {
        path: "/product-create",
        element: <CreateProduct/>
    }
]);