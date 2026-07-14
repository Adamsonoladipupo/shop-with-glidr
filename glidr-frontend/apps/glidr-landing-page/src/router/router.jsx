import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import LandingPage from "../pages/landingPage";

const Router = createBrowserRouter ([
    {
        path : "/",
        element: <LandingPage />
    }
])
export default Router