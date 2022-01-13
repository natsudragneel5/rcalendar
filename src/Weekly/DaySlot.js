import React from "react";

const DaySlot = ({ date, day, currMonth }) => {
  const Date = date;
  return (
    <div
      style={{
        outline: "solid 1px black",
        width: "14.28vw",
        height: "100%",
        fontSize: "xx-large",
        color: currMonth ? "black" : "grey",
      }}
    >
      <center>{day}</center>
    </div>
  );
};

export default DaySlot;
