import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

//* css
import "./InputDate.css";

const InputDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            id="DatePicker"
            className="text-primary text-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showYearPicker
            dateFormat="yyyy"
        />
    );

}

export default InputDate;