import React from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Home/Footer";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/aboutus"} component={About} />
            <Route path={"/checkout"} component={Checkout} />
            <Route path={"/shop"} component={Shop} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
