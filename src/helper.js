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
  }
  return month_no;
}
