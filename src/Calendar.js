import React, { useState } from "react";
import dayjs from "dayjs";
import Daily from "./Daily";
import logo from "./logo.svg";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
import { getDay, getMonth } from "./helper";

const Calendar = () => {
  const Today = dayjs();
  const ThisDay = Today.date();
  var ThisMonth = getMonth(Today.month());
  console.log("Today object", Today);
  const ThisYear = Today.year();
  const [activeType, setActiveType] = useState("Monthly");
  const switchToMonthly = () => {
    if (activeType !== "Monthly") {
      setActiveType("Monthly");
    }
  };
  const switchToWeekly = () => {
    if (activeType !== "Weekly") {
      setActiveType("Weekly");
    }
  };
  const switchToDaily = () => {
    if (activeType !== "Daily") {
      setActiveType("Daily");
    }
  };
  console.log("activeType", activeType);
  console.log(
    "Today",
    ThisMonth + " " + ThisDay + " " + getDay(Today.day()) + " " + ThisYear
  );
  return (
    <>
      <div>
        <img
          alt="logo"
          src={logo}
          width={60}
          height={60}
          style={{ float: "left" }}
        />
        <label style={{ float: "left", fontSize: "40px" }}>
          <b>R</b>Calendar
        </label>
        <select
          style={{ float: "right", marginTop: "10px", marginRight: "10px" }}
        >
          <option onClick={switchToMonthly}>month</option>
          <option onClick={switchToWeekly}>week</option>
          <option onClick={switchToDaily}>day</option>
        </select>
      </div>
      <div className="CalendarGrid">
        {activeType === "Monthly" && <Monthly />}
        {activeType === "Weekly" && <Weekly />}
        {activeType === "Daily" && <Daily />}
      </div>
    </>
  );
};

export default Calendar;
