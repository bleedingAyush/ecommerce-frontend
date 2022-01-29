import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
// import DemoNav from "./components/DemoNav";

function App() {
  // const [value, setValue] = useState<string[]>([]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
          <Route path={"/shop"} component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
