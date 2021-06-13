import MatchList from "components/matches/matches";
import LeaguePage from "pages/leaguePage/leaguePage";
import LeaguesList from "pages/leaguesList";
import TeamsList from "pages/teamsList/teamList";
import React from "react";
import { Route, Switch, withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import "./main.css";
const routes = (
  <Switch>
    <Route exact path="/competitions" component={LeaguesList} />
    <Route path="/competitions/:id/" component={LeaguePage} />
    <Route exact path="/teams" component={TeamsList} />
    <Route
      path="/teams/:id/matches"
      render={(routeProps) => <MatchList {...routeProps} />}
    />
  </Switch>
);
function Main(props) {
  console.log(props);
  return (
    <>
      <div className="main-content">
        <nav className="nav-bar">
          <ul>
            <li>
              <NavLink to="/competitions">Leagues&Cup</NavLink>
            </li>
            <li>
              <NavLink to="/teams">Teams</NavLink>
            </li>
          </ul>
        </nav>
        {routes}
      </div>
    </>
  );
}

export default withRouter (Main);
