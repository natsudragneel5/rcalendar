import React from "react";

const DaySlot = ({ date, day, currMonth }) => {
  const Date = date;
  return (
    <div style={{ width: "14.28%", color: currMonth ? "black" : "grey" }}>
      <center>{day}</center>
    </div>
  );
};

export default DaySlot;
