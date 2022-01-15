import dayjs from "dayjs";
import { createContext, useContext, useReducer, useState } from "react";
import { getDay, getWeekday } from "../helper";
const initialData = {
  Today: dayjs(),
  Day: dayjs().date(),
  Year: dayjs().year(),
  Month: dayjs().month() + 1,
  Date: `${dayjs().year()}-${dayjs().format("MM")}-${dayjs().format("DD")}`,
  WeekDay: getDay(getWeekday(dayjs())),
};
const DayReducer = (action, state) => {
  let t = dayjs(state.Date);
  switch (action.type) {
    case "nextDay":
      t = t.add(1, "day");
      const nState = {
        Today: t,
        Day: t.date(),
        Year: t.year(),
        Month: t.month() + 1,
        Date: `${t.year()}-${t.format("MM")}-${t.format("DD")}`,
        WeekDay: getDay(getWeekday(t)),
      };
      console.log("State changed", nState);
      return nState;
    case "prevDay":
      t = t.subtract(1, "day");
      const pState = {
        Today: t,
        Day: t.date(),
        Year: t.year(),
        Month: t.month() + 1,
        Date: `${t.year()}-${t.format("MM")}-${t.format("DD")}`,
        WeekDay: getDay(getWeekday(t)),
      };
      console.log("State changed", pState);
      return pState;
  }
};
const DayContext = createContext();
export const DayProvider = ({ children }) => {
  const [currDay, dayDispatch] = useReducer(DayReducer, initialData);
  return (
    <DayContext.Provider value={{ currDay, dayDispatch }}>
      {children}
    </DayContext.Provider>
  );
};

export const useDay = () => useContext(DayContext);
