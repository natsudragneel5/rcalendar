import React from "react";
import EventContainer from "../components/EventContainer";
import TimedEventContainer from "../components/TimedEventContainer";

const TimeSlot = ({ date, day, currMonth, startTime, endTime }) => {
  return (
    <div className="TimeSlot">
      <TimedEventContainer
        date={date}
        startTime={startTime}
        endTime={endTime}
      />
    </div>
  );
};

export default TimeSlot;
