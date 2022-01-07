import dayjs from "dayjs";
import { createContext, useContext, useReducer } from "react";
import {
  createDaysForCurrentMonth,
  createDaysForPreviousMonth,
  createDaysForNextMonth,
} from "../helper";
const currYear = dayjs().year();
const currMonth = dayjs().month();
const MonthReducer = (month) => {
  return (state, action) => {
    switch (action.type) {
      case "PrevMonth":
        let y = currYear;
        let m = currMonth;
        state = [];
        if (currMonth === 0) {
          y = y - 1;
          m = 11;
          state = [
            createDaysForPreviousMonth(y, m),
            createDaysForCurrentMonth(y, m),
            createDaysForNextMonth(y, m),
          ];
        } else {
          m = m - 1;
          state = [
            createDaysForPreviousMonth(y, m),
            createDaysForCurrentMonth(y, m),
            createDaysForNextMonth(y, m),
          ];
        }

        return state;
      case "NextMonth":
        state = [];
        state = [
          createDaysForPreviousMonth(),
          createDaysForCurrentMonth(),
          createDaysForNextMonth(),
        ];
        return state;
      default:
        return;
    }
  };
};
const MonthContext = createContext();
export const MonthProvider = ({ children }) => {
  const [Month, MonthDispatch] = useReducer(MonthReducer, [
    createDaysForPreviousMonth(currYear, currMonth),
    createDaysForCurrentMonth(currYear, currMonth),
    createDaysForNextMonth(currYear, currMonth),
  ]);
  return (
    <MonthContext.Provider value={{ Month, MonthDispatch }}>
      {children}
    </MonthContext.Provider>
  );
};
export const useMonth = () => useContext(MonthContext);
