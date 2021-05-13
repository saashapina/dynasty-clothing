import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
