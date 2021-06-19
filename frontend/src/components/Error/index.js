import React from "react";

import './styles.css';

const ErrorNotification = ({ message }) => {
    return (
        <div className="container-error">
            <p>{message}</p>
        </div>
    )
}

export default ErrorNotification;