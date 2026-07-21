import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import StoreOnboarding from "../pages/storeOnboarding";

const Router = createBrowserRouter ([
    {
        path : "/",
        element: <LandingPage />
    },
    {
        path: "store",
        element: <StoreOnboarding />
    }
])
export default Router