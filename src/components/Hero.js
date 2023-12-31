import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Hero = () => {

    const {
        user,
        isAuthenticated,
    } = useAuth0();

    let warning;
    if (isAuthenticated && !user.email_verified) {
        warning = <div className="email-warning"><span>You need to verify your email address!</span></div>
    }

    return (
        <div className="text-center hero my-5">
            {warning}
            <img className="mb-3 app-logo" src={logo} alt="React logo" width="120"/>
            <h1 className="mb-4">React.js Sample Project</h1>

            <p className="lead">
                This is a sample application that demonstrates an authentication flow for
                an SPA, using <a href="https://reactjs.org">React.js</a>
            </p>
        </div>
    );
};

export default Hero;
