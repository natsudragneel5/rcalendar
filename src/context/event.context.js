import { createContext, useContext, useReducer } from "react";
const initialData = [
  {
    id: 1,
    name: "event 1",
    startDate: "2022-01-08",
    endDate: "2022-1-8",
    image: "https://bit.ly/3FmdIoz",
  },
  { id: 2, name: "event 2", startDate: "2022-01-08", endDate: "2022-1-8" },
];

const EventReducer = (state, action) => {
  switch (action.type) {
    case "AddEvent":
      return state;
    case "RemoveEvent":
      return state;
    case "ModifyEvent":
      const target = state.find((event) => event.id === action.payload.id);
      const newArray = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, startDate: action.payload.date };
        } else {
          return item;
        }
      });
      console.log(newArray);
      return newArray;
    default:
      return state;
  }
};

const EventContext = createContext();
export const EventProvider = ({ children }) => {
  const [calendarEvent, eventDispatch] = useReducer(EventReducer, initialData);
  return (
    <EventContext.Provider value={{ calendarEvent, eventDispatch }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
