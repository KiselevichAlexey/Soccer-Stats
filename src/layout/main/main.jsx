import React from "react";
import { Route, Switch } from "react-router";
import './main.css'
const routes = (
  <Switch>
    <Route exact path="/"  />
    <Route path="/competitions/:id/"  />
  </Switch>
);
function Main() {
  return <div className="main-content">{routes}</div>;
}

export default Main;
