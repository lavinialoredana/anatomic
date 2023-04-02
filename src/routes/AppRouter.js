import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/Search";
import Albums from "../pages/Albums";
import ErrorPage from "../pages/Error";

export const routesConfig = [
    {
        path: "/",
        element: <Search />,
        errorElement: <ErrorPage />,
    },

    {
        path: "/all-albums",
        element: <Albums />,
        errorElement: <ErrorPage />,
    },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
