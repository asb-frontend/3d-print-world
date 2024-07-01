import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import Login from "./components/Login/Login";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { useContext } from "react";
import { GlobalStateContext } from "./GlobalState";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Client } from "appwrite";

function App() {
  const client = new Client();
  const { state, dispatch } = useContext(GlobalStateContext);

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("667375240009c7efa89e");

  return (
    <div className="App">
      <Router>
        <div className="content">
          <NavBar className="navBar" />
          <div className="mainContent" style={{marginTop: '80px'}}><Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
          </Routes></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
