import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            {/* <Route path="/contact" component={Contact} /> */}
            {/* Add more routes for additional pages */}
            {/* <Route path="/newpage" component={NewPage} /> */}
          </Switch>
        <Home />
      </Router>
    </div>
  );
}

export default App;
