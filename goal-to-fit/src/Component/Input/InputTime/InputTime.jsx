import React, { useState } from "react";

//*Extentions of datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//* css
import "./InputTime";

const InputTime = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            className="input-profile text-primary text-center"
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