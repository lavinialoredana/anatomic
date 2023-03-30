import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App";
import Albums from "../pages/Albums";
import ErrorPage from "../pages/Error";

export const routesConfig = [
    {
        path: "/",
        element: <App />,
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
