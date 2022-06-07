import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingCalender = ({ date, setDate, click }) => {
  
//   const onDateChange = (newDate) => {
//     setDate(newDate);
//     //console.log(newDate);
//   };
  return (
    <div>
      <Calendar
        onChange={(date) => {
        setDate(date);
        click();
        }}
        value={date}
        showNeighboringMonth={false}
        locale={"en-US"}
      />
    </div>
  );
};

export default BookingCalender;
