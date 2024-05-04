import {createBrowserRouter} from "react-router-dom";
import AllProductView from "../view /AllProductView";
import App from "../App";
import CounterView from "../view /CounterView";
import ProductEditView from "../view /ProductEditView";

export const COUNTER_PATH = "/counter";
export const ALL_PRODUCTS_VIEW_PATH = "/products";
export const PRODUCT_EDIT_VIEW_PATH = "/product/:productId/edit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/test",
                element: <div>TEst</div>,
            },
            {
                path: COUNTER_PATH,
                element: <CounterView/>,
            },
            {
                path: ALL_PRODUCTS_VIEW_PATH,
                element: <AllProductView/>,
            },
            {
                path: PRODUCT_EDIT_VIEW_PATH,
                element: <ProductEditView/>,
            }
        ]
    },

]);


export default router;