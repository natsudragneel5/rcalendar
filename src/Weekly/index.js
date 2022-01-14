import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useEvent } from "../context/event.context";
import {
  createDaysForWeek,
  getInitialWeekNumber,
  getMaxWeekNumber,
  getMonth,
} from "../helper";
import DaySlot from "./DaySlot";
import TimeSlot from "./TimeSlot";

const Weekly = ({ Today }) => {
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
  const [currWeekDays, setCurrWeekDays] = useState([]);
  const [currWeekUL, setCurrWeekUL] = useState(7);
  const [currWeekLL, setCurrWeekLL] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [maxWeekNumber, setMaxWeekNumber] = useState(
    getMaxWeekNumber(currYear, currMonth)
  );
  const [currWeekNumber, setCurrWeekNumber] = useState(
    getInitialWeekNumber(currYear, currMonth)
  );
  const [currMonthData, setCurrMonthData] = useState([
    createDaysForWeek(currYear, currMonth),
  ]);
  const prevMonth = () => {
    if (currMonth === 0) {
      setCurrMonthData([createDaysForWeek(currYear - 1, 11)]);
      let x = getMaxWeekNumber(currYear - 1, 11);
      setMaxWeekNumber(x - 1);
      setCurrWeekNumber(getMaxWeekNumber(currYear - 1, 11));
      setCurrYear(currYear - 1);
      setCurrMonth(11);
    } else {
      setCurrMonthData([createDaysForWeek(currYear, currMonth - 1)]);
      let x = getMaxWeekNumber(currYear, currMonth - 1);
      setMaxWeekNumber(x - 1);
      setCurrWeekNumber(getMaxWeekNumber(currYear, currMonth - 1));
      setCurrMonth(currMonth - 1);
    }
  };
  const prevWeek = () => {
    setIsLoading(true);
    if (currWeekNumber === 0) {
      prevMonth();
    } else {
      setCurrWeekNumber(currWeekNumber - 1);
    }
    setIsLoading(false);
  };
  const nextMonth = () => {
    if (currMonth === 11) {
      setCurrMonthData([createDaysForWeek(currYear + 1, 0)]);
      setMaxWeekNumber(getMaxWeekNumber(currYear + 1, 0));
      setCurrWeekNumber(0);
      setCurrYear(currYear + 1);
      setCurrMonth(0);
    } else {
      setCurrMonthData([createDaysForWeek(currYear, currMonth + 1)]);
      setMaxWeekNumber(getMaxWeekNumber(currYear, currMonth + 1));
      setCurrWeekLL(0);
      setCurrWeekUL(7);
      setCurrWeekNumber(0);
      setCurrMonth(currMonth + 1);
    }
  };
  const nextWeek = () => {
    setIsLoading(true);
    if (currWeekNumber === maxWeekNumber) {
      nextMonth();
    } else {
      setCurrWeekNumber(currWeekNumber + 1);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    let week = currMonthData[0].length / 7;
    setMaxWeekNumber(week - 1);
    let up = 7 * currWeekNumber;
    up = up + 7;
    let lp = up - 7;
    setCurrWeekUL(up);
    setCurrWeekLL(lp);
    let data = [];
    for (let i = currWeekLL; i < currWeekUL; i++) {
      data[i] = currMonthData[0][i];
    }
    setCurrWeekDays(data);
    setIsLoading(false);
    return () => {
      setCurrWeekDays([]);
    };
  }, [currWeekUL, currWeekLL, currMonthData, currWeekNumber]);
  return (
    <>
      <button onClick={prevWeek} disabled={isLoading}>
        {" < "}
      </button>
      <label style={{ marginRight: "2%", marginLeft: "10%" }}>
        {getMonth(currMonth)}
      </label>
      <label style={{ marginRight: "10%" }}>{currYear}</label>
      <button onClick={nextWeek} disabled={isLoading}>
        {" > "}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingRight: "2vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label>GMT</label>
          </div>{" "}
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
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>+5:30</label>
          </div>
          {currWeekDays.map((day, index) => (
            <DaySlot
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>12:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"12:00 am"}
              endTime={"1:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>1:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"1:00 am"}
              endTime={"2:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>2:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"2:00 am"}
              endTime={"3:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>3:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"3:00 am"}
              endTime={"4:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>4:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"4:00 am"}
              endTime={"5:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>5:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"5:00 am"}
              endTime={"6:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>6:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"6:00 am"}
              endTime={"7:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>7:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"7:00 am"}
              endTime={"8:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>8:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"9:00 am"}
              endTime={"10:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>9:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"11:00 am"}
              endTime={"12:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>10:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"12:00 pm"}
              endTime={"1:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>11:00 am</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"1:00 pm"}
              endTime={"2:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>12:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"2:00 pm"}
              endTime={"3:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>1:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"3:00 pm"}
              endTime={"4:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>2:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"4:00 pm"}
              endTime={"5:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>3:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"5:00 pm"}
              endTime={"6:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>4:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"6:00 pm"}
              endTime={"7:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>5:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"7:00 pm"}
              endTime={"8:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>6:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"8:00 pm"}
              endTime={"9:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>7:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"9:00 pm"}
              endTime={"10:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>8:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"10:00 pm"}
              endTime={"11:00 pm"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>9:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              startTime={"11:00 pm"}
              endTime={"12:00 am"}
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>10:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "3vw",
            }}
          >
            <label style={{ fontSize: "small" }}>11:00 pm</label>
          </div>
          {currWeekDays.map((day, index) => (
            <TimeSlot
              key={currWeekDays[index].date}
              date={currWeekDays[index].date}
              day={currWeekDays[index].dayOfMonth}
              currMonth={currWeekDays[index].isCurrentMonth}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Weekly;
