import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/Search";
import Albums from "../pages/Albums";
import ErrorPage from "../pages/Error";

export const homeSrc = "/";
export const albumsSrc = "/all-albums";

export const routesConfig = [
    {
        path: homeSrc,
        element: <Search />,
        errorElement: <ErrorPage />,
    },

    {
        path: albumsSrc,
        element: <Albums />,
        errorElement: <ErrorPage />,
    },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
