import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Eventspage from "./pages/EventsPage";
import Nav from "./components/nav";

function App() {
  return (
    <Router>
      <div className="bg-sage bg-cover">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/opskrifter" element={<Recipes />}></Route>
          <Route path="/events" element={<Eventspage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
