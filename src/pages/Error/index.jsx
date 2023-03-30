import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <p> Sorry, an unexpected error just happened.</p>
            <p>
                <i> {error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
