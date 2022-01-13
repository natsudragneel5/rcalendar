import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import EventContainer from "../components/EventContainer";
import { useEvent } from "../context/event.context";

const DaySlot = ({ date, day, currMonth }) => {
  return (
    <div
      className="Dayslot"
      style={{
        width: "14.28%",
        color: currMonth ? "black" : "grey",
        overflow: "hidden",
      }}
    >
      <center>{day}</center>
      <EventContainer date={date}></EventContainer>
    </div>
  );
};

export default DaySlot;
