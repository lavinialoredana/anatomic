import { createBrowserRouter } from "react-router-dom";
import AllAlbumsProvider from "../context/AllAlbumsProvider";
import App from "../pages/App/App";
import Albums from "../pages/Albums";
import ErrorPage from "../pages/Error";

export const routesConfig = [
    {
        path: "/",
        element: (
            <AllAlbumsProvider>
                <App />
            </AllAlbumsProvider>
        ),
        errorElement: <ErrorPage />,
    },

    {
        path: "/all-albums",
        element: (
            <AllAlbumsProvider>
                <Albums />
            </AllAlbumsProvider>
        ),
        errorElement: <ErrorPage />,
    },
];

const AppRouter = createBrowserRouter(routesConfig);

export default AppRouter;
