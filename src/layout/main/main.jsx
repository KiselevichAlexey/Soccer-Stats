import LeaguePage from "pages/leaguePage/leaguePage";
import LeaguesList from "pages/leaguesList";
import React from "react";
import { Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";

import "./main.css";
const routes = (
  <Switch>
    <Route exact path="/competitions" component={LeaguesList} />
    <Route path="/competitions/:id/" component={LeaguePage} />
  </Switch>
);
function Main() {
  return (
    <>
      <div className="main-content">
      <nav className='nav-bar'>
        <ul>
        <li><NavLink to='/competitions'>Leagues&Cup</NavLink></li>
        <li><NavLink to='/teams'>Teams</NavLink></li>
        </ul>
      </nav>
        {routes}</div>
    </>
  );
}

export default Main;
