import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Calender from "./components/Calender";
import Charts from "./components/Charts";
import Dashboard from "./components/Dashboard";
import Maps from "./components/Maps";
import ScheduledAlerts from "./components/ScheludeAlerts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
        <ScheduledAlerts />
      </Router>
    </div>
  );
}

export default App;
