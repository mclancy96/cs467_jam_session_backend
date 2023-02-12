import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress"

export const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="page-layout">
                <CircularProgress />
            </div>
        ),
    });

    return <Component />;
};