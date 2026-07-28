import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import StoreOnboarding from "../pages/storeOnboarding";
import StoreSignIn from "../pages/storeSignin";

const Router = createBrowserRouter ([
    {
        path : "/",
        element: <LandingPage />
    },
    {
        path: "store",
        element: <StoreOnboarding />
    },
    {
        path: "store_in",
        element: <StoreSignIn />
    }
])
export default Router