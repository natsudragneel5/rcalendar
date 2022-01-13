import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import EventItem from "./EventItem";
import { useEvent } from "../context/event.context";
const EventContainer = ({ date }) => {
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
  const modify = (id, date) => {
    eventDispatch({ type: "ModifyEvent", payload: { id: id, date: date } });
  };
  const addEventToContainer = (id) => {
    const EventList = calendarEvent.filter((ev) => id === ev.id);
    modify(id, date);
  };
  useEffect(() => {
    setIsLoading(true);
    let data = [];
    data = calendarEvent.filter((ev) => ev.startDate === date);
    setEventsToDisplay(data);
    setIsLoading(false);
    return () => {};
  }, [calendarEvent]);
  return (
    <div
      className="Event-Container"
      ref={drop}
      style={{
        border: isOver ? "2px solid pink" : "",

        height: "100%",
      }}
    >
      {eventsToDisplay !== null &&
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

export default EventContainer;
