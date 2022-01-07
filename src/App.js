import "./App.css";
import Calendar from "./Calendar";
import { MonthProvider } from "./context/month.context";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

export default App;
