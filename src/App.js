import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import Login from "./components/Login/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Client } from 'appwrite';

function App() {
  const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('667375240009c7efa89e');

  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/store" element={<Store/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
