import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Calendar from "./Calendar";
import { EventProvider } from "./context/event.context";
import { DayProvider } from "./context/daily.context";

function App() {
  return (
    <EventProvider>
      <DayProvider>
        <DndProvider backend={HTML5Backend}>
          <div className="App">
            <Calendar />
          </div>
        </DndProvider>
      </DayProvider>
    </EventProvider>
  );
}

export default App;
