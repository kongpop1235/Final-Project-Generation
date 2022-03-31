import React from "react";

import "./LabelText.css";

const LabelText = ({ children,htmlFor,className}) => {
    return (
            <label className={className} htmlFor={htmlFor}>{children}</label>
    );
}

export default LabelText;