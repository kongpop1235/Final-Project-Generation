import React, { useState } from "react";

//*Extentions of datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//* css
import "./InputTime";

const InputTime = ({className}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            className={className}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
        />
    )
}

export default InputTime;