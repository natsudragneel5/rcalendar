import { createContext, useContext, useReducer } from "react";
const initialData = [
  {
    id: 1,
    name: "Birthday",
    startDate: "2022-01-08",
    endDate: "2022-1-8",
    startTime: "12:00 am",
    endTime: "1:00 am",
    image: "https://bit.ly/3FmdIoz",
  },
  {
    id: 2,
    name: "the day",
    startDate: "2022-01-08",
    startTime: "1:00 am",
    endTime: "2:00 am",
    endDate: "2022-1-8",
  },
];

const EventReducer = (state, action) => {
  switch (action.type) {
    case "AddEvent":
      return state;
    case "RemoveEvent":
      return state;
    case "ModifyEventWithTime":
      //const target = state.find((event) => event.id === action.payload.id);
      const nArray = state.map((item) => {
        console.log(action.payload.date);
        if (item.id === action.payload.id) {
          return {
            ...item,
            startDate: action.payload.date,
            startTime: action.payload.startTime,
            endTime: action.payload.endTime,
          };
        } else {
          return item;
        }
      });
      return nArray;
    case "ModifyEvent":
      //const target = state.find((event) => event.id === action.payload.id);
      const newArray = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, startDate: action.payload.date };
        } else {
          return item;
        }
      });
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
