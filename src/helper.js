import dayjs from "dayjs";
const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
export function getDay(day_no) {
  let day = "Sunday";
  switch (day_no) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      break;
  }
  return day;
}
export function getMonth(month_no) {
  switch (month_no) {
    case 0:
      month_no = "January";
      break;
    case 1:
      month_no = "Febuary";
      break;
    case 2:
      month_no = "March";
      break;
    case 3:
      month_no = "April";
      break;
    case 4:
      month_no = "May";
      break;
    case 5:
      month_no = "June";
      break;
    case 6:
      month_no = "July";
      break;
    case 7:
      month_no = "August";
      break;
    case 8:
      month_no = "September";
      break;
    case 9:
      month_no = "October";
      break;
    case 10:
      month_no = "November";
      break;
    case 11:
      month_no = "December";
      break;
    default:
      break;
  }
  return month_no;
}
export function getNumberOfDaysInMonth(year, month) {
  return dayjs(`${year}-${month + 1}-01`).daysInMonth();
}
export function createDaysForCurrentMonth(year, month) {
  const data = [...Array(getNumberOfDaysInMonth(year, month))].map(
    (day, index) => {
      return {
        date: dayjs(`${year}-${month + 1}-${index + 1}`).format("YYYY-MM-DD"),
        dayOfMonth: index + 1,
        isCurrentMonth: true,
      };
    }
  );
  return data;
}
export function getWeekday(date) {
  return dayjs(date).weekday();
}
export function createDaysForPreviousMonth(year, month) {
  const currentMonthDays = createDaysForCurrentMonth(year, month);
  const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
  const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");
  const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
    ? firstDayOfTheMonthWeekday - 1
    : 6;
  const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
    .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
    .date();
  //const d=
  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
    let d = previousMonthLastMondayDayOfMonth + index;
    return {
      date: dayjs(
        `${previousMonth.year()}-${previousMonth.month() + 2}-${d}`
      ).format("YYYY-MM-DD"),
      dayOfMonth: previousMonthLastMondayDayOfMonth + index,
      isCurrentMonth: false,
    };
  });
}

export function createDaysForNextMonth(year, month) {
  const currentMonthDays = createDaysForCurrentMonth(year, month);
  const lastDayOfTheMonthWeekday = getWeekday(
    `${year}-${month + 1}-${currentMonthDays.length}`
  );
  const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
  const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
    ? 7 - lastDayOfTheMonthWeekday
    : lastDayOfTheMonthWeekday;
  return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${nextMonth.year()}-${nextMonth.month() + 2}-${index + 1}`
      ).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: false,
    };
  });
}
export function createDaysForWeek(year, month) {
  let data = [];
  const prevMonth = createDaysForPreviousMonth(year, month);
  const currMonth = createDaysForCurrentMonth(year, month);
  const nextMonth = createDaysForNextMonth(year, month);
  let i = 0;
  prevMonth.map((days) => {
    data[i] = days;
    i++;
    return null;
  });
  currMonth.map((days) => {
    data[i] = days;
    i++;
    return null;
  });
  nextMonth.map((days) => {
    data[i] = days;
    i++;
    return null;
  });
  return data;
}
export function getMaxWeekNumber(year, month) {
  const maxWeekNumber = createDaysForWeek(year, month).length / 7;
  return maxWeekNumber - 1;
}
export function getInitialWeekNumber(year, month) {
  const DaysForMonth = createDaysForWeek(year, month);
  let maxWeekNumber = DaysForMonth.length / 7;
  maxWeekNumber = maxWeekNumber - 1;
  let today = DaysForMonth.map((x, index) => {
    if (x.date === dayjs().format("YYYY-MM-DD")) {
      return index;
    }
  });
  let k = 0;
  for (let i = 0; i < DaysForMonth.length; i++) {
    if (i % 7 === 0) {
      k++;
    }
    if (DaysForMonth[i].date === dayjs().format("YYYY-MM-DD")) {
      break;
    }
  }
  return k - 1; //dayjs().format("YYYY-MM-DD"); //getDay(getWeekday(dayjs()))
}
