import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChampionsDetail from "./pages/ChampionsDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/champions" element={<ChampionsDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
