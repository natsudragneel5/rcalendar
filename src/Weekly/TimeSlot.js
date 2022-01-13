import React from "react";
import EventContainer from "../components/EventContainer";

const TimeSlot = ({ date, day, currMonth }) => {
  return (
    <div
      className="TimeSlot"
      style={{
        outline: "solid 1px black",
        width: "14.28vw",
      }}
    >
      <EventContainer date={date} />
    </div>
  );
};

export default TimeSlot;
