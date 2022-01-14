import React from "react";
import { useDrag } from "react-dnd";
import { useEvent } from "../context/event.context";
const EventItem = ({ date, id, name, img }) => {
  const { eventDispatch } = useEvent();
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id, date: date },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{ border: isDragging ? "2px solid pink" : "" }}
      className="Event-Item"
    >
      {name}
      {img !== undefined && <img src={img} width="40px" height="40px" />}
    </div>
  );
};

export default EventItem;
