import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CatalogueView from "../view/CatalogueView";
import LoginView from "../view/LoginView";
import RegisterView from "../view/RegisterView";
import BasketView from "../view/BasketView";
import INavbar from "../component/common/Navbar/INavbar";
import AccountView from "../view/AccountView";
import AdminView from "../view/AdminView";
import ConfirmationView from "../view/ConfirmationView";

export const CATALOGUE_PATH = "/catalogue";
export const REGISTER_PATH = "/register";
export const BASKET_PATH = "/basket"
export const ACCOUNT_PATH = "/account"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/test",
                element: <div>
                    <INavbar/>
                    TEst
                    </div>,
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
            },
            {
                path: "/basket",
                element: <BasketView/>
            },
            {
                path: "/account",
                element: <AccountView/>
            },
            {
                path: "/admin",
                element: <AdminView/>
            },
            {
                path: "/confirm",
                element: <ConfirmationView/>
            }
        ]
    },
]);


export default router;