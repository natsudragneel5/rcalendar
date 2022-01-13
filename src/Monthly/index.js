import React, { useEffect, useState } from "react";
import { useEvent } from "../context/event.context";
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
  const [days, setDays] = useState(null);
  const [prevDays, setPrevDays] = useState(null);
  const [nextDays, setNextDays] = useState(null);

  const prevMonth = () => {
    setIsLoading(true);
    if (currMonth === 0) {
      setDays(createDaysForCurrentMonth(currYear - 1, 11));
      setPrevDays(createDaysForPreviousMonth(currYear - 1, 11));
      setNextDays(createDaysForNextMonth(currYear - 1, 11));
      setCurrMonth(11);
      setCurrYear(currYear - 1);
    } else {
      setDays(createDaysForCurrentMonth(currYear, currMonth - 1));
      setPrevDays(createDaysForPreviousMonth(currYear, currMonth - 1));
      setNextDays(createDaysForNextMonth(currYear, currMonth - 1));
      setCurrMonth(currMonth - 1);
    }
    setIsLoading(false);
  };
  const nextMonth = () => {
    setIsLoading(true);
    if (currMonth === 11) {
      setDays(createDaysForCurrentMonth(currYear + 1, 0));
      setPrevDays(createDaysForPreviousMonth(currYear + 1, 0));
      setNextDays(createDaysForNextMonth(currYear + 1, 0));
      setCurrMonth(0);
      setCurrYear(currYear + 1);
    } else {
      setDays(createDaysForCurrentMonth(currYear, currMonth + 1));
      setPrevDays(createDaysForPreviousMonth(currYear, currMonth + 1));
      setNextDays(createDaysForNextMonth(currYear, currMonth + 1));
      setCurrMonth(currMonth + 1);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    setDays(createDaysForCurrentMonth(currYear, currMonth));
    setPrevDays(createDaysForPreviousMonth(currYear, currMonth));
    setNextDays(createDaysForNextMonth(currYear, currMonth));
    setIsLoading(false);
    return () => {};
  }, [currMonth, currYear]);
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {prevDays &&
          prevDays.map((day, index) => (
            <DaySlot
              key={prevDays[index].date}
              date={prevDays[index].date}
              day={prevDays[index].dayOfMonth}
              currMonth={prevDays[index].isCurrentMonth}
            />
          ))}
        {days &&
          days.map((day, index) => (
            <DaySlot
              key={days[index].date}
              date={days[index].date}
              day={days[index].dayOfMonth}
              currMonth={days[index].isCurrentMonth}
            />
          ))}
        {nextDays &&
          nextDays.map((day, index) => (
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
