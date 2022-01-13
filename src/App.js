import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Calendar from "./Calendar";
import { EventProvider } from "./context/event.context";

function App() {
  return (
    <EventProvider>
      <DndProvider backend={HTML5Backend}>
        <div className="App">
          <Calendar />
        </div>
      </DndProvider>
    </EventProvider>
  );
}

export default App;
