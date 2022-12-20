import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DatesBooking() {
  /* let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let format = "";
  if (month < 10) {
    console.log(`${day}-0${month}-${year}`);
    format = `${day}-0${month}-${year}`;
  } else {
    console.log(`${day}-${month}-${year}`);
    format = `${day}-${month}-${year}`;
  } */
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="gui-input datapicker"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd MM"
    />
  );
}

export { DatesBooking };
