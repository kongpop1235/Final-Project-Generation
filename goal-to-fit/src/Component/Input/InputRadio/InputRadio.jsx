import React from "react";

import "./InputRadio.css";

const InputRadio = ({value1,value2}) => {
    return (
        <div className="segmented-control">
            <input type="radio" name="radio2" value="3" id="tab-1" defaultChecked />
            <label htmlFor="tab-1" className="segmented-control__1">
                <p className="text-upper font-weight">{value1}</p>
            </label>
            <input type="radio" name="radio2" value="4" id="tab-2" />
            <label htmlFor="tab-2" className="segmented-control__2">
                <p className="text-upper font-weight">{value2}</p>
            </label>
            <div className="segmented-control__color"></div>
        </div>
    )
}

export default InputRadio;