import React, { useEffect, useReducer, useState } from "react";
import { useDrop } from "react-dnd";
import { useEvent } from "../context/event.context";
import EventItem from "./EventItem";

const TimedEventContainer = ({ date, startTime, endTime }) => {
  const [eventsToDisplay, setEventsToDisplay] = useState([]);
  const { calendarEvent, eventDispatch } = useEvent();
  const [isLoading, setIsLoading] = useState(false);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => addEventToContainer(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const modify = (id) => {
    eventDispatch({
      type: "ModifyEventWithTime",
      payload: { id: id, date: date, startTime: startTime, endTime: endTime },
    });
  };
  const addEventToContainer = (id) => {
    const EventList = calendarEvent.filter((ev) => id === ev.id);
    //setEventsToDisplay((ev) => [...ev, EventList[0]]);
    modify(id);
  };
  //console.log("this is working", date);
  useEffect(() => {
    setIsLoading(true);
    let data = [];
    data = calendarEvent.filter(
      (ev, index, Arr) =>
        ev.startDate === date &&
        ev.startTime === startTime &&
        ev.endTime === endTime
    );
    setEventsToDisplay(data);
    setIsLoading(false);
    return () => {};
  }, [calendarEvent, date, startTime, endTime]);
  return (
    <div
      className="Event-Container"
      ref={drop}
      style={{
        border: isOver ? "2px solid pink" : "",
        backgroundColor: "Highlight",
        height: "12vh",
      }}
    >
      {!isLoading &&
        eventsToDisplay !== null &&
        eventsToDisplay.map((event, index) => (
          <EventItem
            key={eventsToDisplay[index].id}
            date={eventsToDisplay[index].startDate}
            id={eventsToDisplay[index].id}
            name={eventsToDisplay[index].name}
            img={eventsToDisplay[index].image}
          />
        ))}
    </div>
  );
};

export default TimedEventContainer;
