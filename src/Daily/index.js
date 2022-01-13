import React, { useState } from "react";

const Daily = ({ Today }) => {
  const [currDay, setCurrDay] = useState(Today.date());
  const [currMonth, setCurrMonth] = useState(Today.month());
  const [currYear, setCurrYear] = useState(Today.year());
  return <>This is Daily view</>;
};

export default Daily;
