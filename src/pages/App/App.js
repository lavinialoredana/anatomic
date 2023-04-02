import AllAlbumsProvider from "../../context/AllAlbumsProvider";
import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";

const App = () => {
    return (
        <div>
            <AllAlbumsProvider>
                <RouterProvider router={AppRouter} />
            </AllAlbumsProvider>
        </div>
    );
};

export default App;
