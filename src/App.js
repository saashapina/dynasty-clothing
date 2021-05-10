import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/home.js";
import { Hats } from "./pages/Hats/hats.js";
import { Jackets } from "./pages/Jackets/jackets.js";
import { Sneakers } from "./pages/Sneakers/sneakers.js";
import { Womens } from "./pages/Womens/womens.js";
import { Mens } from "./pages/Mens/mens.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hats" component={Hats} />
        <Route path="/jackets" component={Jackets} />
        <Route path="/sneakers" component={Sneakers} />
        <Route path="/womens" component={Womens} />
        <Route path="/mens" component={Mens} />
      </Switch>
    </div>
  );
}

export default App;
