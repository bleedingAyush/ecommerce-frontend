import React, { lazy, Suspense } from "react";
import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Home/Footer";

const Home = lazy(() => import("./components/Home"));
const Checkout = lazy(() => import("./components/checkout/Checkout"));

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route exact path={"/"} component={Home} />
              <Route path={"/checkout"} component={Checkout} />
            </Suspense>
            <Route path={"/aboutus"} component={About} />
            <Route path={"/shop"} component={Shop} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
