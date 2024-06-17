import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            {/* <Route path="/contact" component={Contact} /> */}
            {/* Add more routes for additional pages */}
            {/* <Route path="/newpage" component={NewPage} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
