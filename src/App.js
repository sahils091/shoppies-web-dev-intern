import React from "react";
import "./App.scss";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Story from "./Components/Story/Story";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/story" component={Story} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
