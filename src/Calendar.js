import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useMonth } from "./context/month.context";
import Daily from "./Daily";
import logo from "./logo.svg";
import Monthly from "./Monthly";
import Weekly from "./Weekly";
import { MonthProvider } from "./context/month.context";
const Calendar = () => {
  const Today = dayjs();
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

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
        {activeType === "Monthly" && <Monthly Today={Today} />}
        {activeType === "Weekly" && <Weekly Today={Today} />}
        {activeType === "Daily" && <Daily Today={Today} />}
      </div>
    </div>
  );
};

export default Calendar;
