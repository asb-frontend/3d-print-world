import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
