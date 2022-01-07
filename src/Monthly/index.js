import React, { useEffect, useState } from "react";
import {
  createDaysForCurrentMonth,
  createDaysForNextMonth,
  createDaysForPreviousMonth,
  getMonth,
} from "../helper";
import DaySlot from "./DaySlot";

const Monthly = ({ Today }) => {
  const WEEKDAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const [currMonth, setCurrMonth] = useState(Today.month());
  const [currYear, setCurrYear] = useState(Today.year());
  const [isLoading, setIsLoading] = useState(true);
  const Month = [
    createDaysForPreviousMonth(currYear, currMonth),
    createDaysForCurrentMonth(currYear, currMonth),
    createDaysForNextMonth(currYear, currMonth),
  ];
  const [days, setDays] = useState([]);
  const [prevDays, setPrevDays] = useState([]);
  const [nextDays, setNextDays] = useState([]);
  const prevMonth = () => {
    setIsLoading(true);
    if (currMonth === 0) {
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
    setIsLoading(false);
  };
  const nextMonth = () => {
    console.log("nextMonth");
    setIsLoading(true);
    if (currMonth === 11) {
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    setDays(Month[1]);
    setPrevDays(Month[0]);
    setNextDays(Month[2]);
    setIsLoading(false);
    return () => {};
  }, []);
  if (isLoading) {
    <></>;
  }
  return (
    <>
      <button onClick={prevMonth}>{" < "}</button>
      <label style={{ marginRight: "2%", marginLeft: "10%" }}>
        {getMonth(currMonth)}
      </label>
      <label style={{ marginRight: "10%" }}>{currYear}</label>
      <button onClick={nextMonth}>{" > "}</button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {WEEKDAYS.map((WEEKDAY) => {
          return (
            <div style={{ width: "14.28%" }} key={WEEKDAY}>
              {WEEKDAY}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {prevDays.map((day, index) => (
          <DaySlot
            key={prevDays[index].date}
            date={prevDays[index].date}
            day={prevDays[index].dayOfMonth}
            currMonth={prevDays[index].isCurrentMonth}
          />
        ))}
        {days.map((day, index) => (
          <DaySlot
            key={days[index].date}
            date={days[index].date}
            day={days[index].dayOfMonth}
            currMonth={days[index].isCurrentMonth}
          />
        ))}
        {nextDays.map((day, index) => (
          <DaySlot
            key={nextDays[index].date}
            date={nextDays[index].date}
            day={nextDays[index].dayOfMonth}
            currMonth={nextDays[index].isCurrentMonth}
          />
        ))}
      </div>
    </>
  );
};

export default Monthly;
