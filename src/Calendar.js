import React from "react";
import logo from "./logo.svg";
const Calendar = () => {
  return (
    <div>
      <div>
        <img src={logo} width={60} height={60} style={{ float: "left" }} />
        <label style={{ float: "left", fontSize: "40px" }}>
          <b>R</b>Calendar
        </label>
      </div>
      This is a Calendar
    </div>
  );
};

export default Calendar;
