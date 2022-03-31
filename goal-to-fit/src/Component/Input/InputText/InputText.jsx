import React from "react";

//* css
import "./InputText.css";

const Input = ({type,className,value}) => {
    return (
        <input
            type={type}
            className={className}
            value={value}
        />
    )
}

export default Input;