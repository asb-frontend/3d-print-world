import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/Navbar/Navbar";
import Store from "./components/Store/Store";
import Login from "./components/Login/Login";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Error from "./components/Error/Error"
import Register from "./components/Register/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Client } from "appwrite";

function App() {
  const client = new Client();

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
            <Route path="/register" element={<Register />} />
            <Route path="/error" element={<Error />} />
          </Routes></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
