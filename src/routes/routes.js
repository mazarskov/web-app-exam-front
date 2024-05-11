import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CatalogueView from "../view/CatalogueView";
import LoginView from "../view/LoginView";
import RegisterView from "../view/RegisterView";

export const CATALOGUE_PATH = "/catalogue";

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
                path: CATALOGUE_PATH,
                element: <CatalogueView/>,
            },
            {
                path: "/",
                element: <LoginView/>
            },
            {
                path: "/register",
                element: <RegisterView/>
            }
        ]
    },
]);


export default router;