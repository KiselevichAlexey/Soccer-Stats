import LeaguePage from "pages/leaguePage/leaguePage";
import LeaguesList from "pages/leaguesList";
import React from "react";
import { Route, Switch } from "react-router";
import './main.css'
const routes = (
  <Switch>
    <Route exact path="/" component={LeaguesList} />
    <Route path="/competitions/:id/" component={LeaguePage} />
  </Switch>
);
function Main() {
  return <div className="main-content">{routes}</div>;
}

export default Main;
