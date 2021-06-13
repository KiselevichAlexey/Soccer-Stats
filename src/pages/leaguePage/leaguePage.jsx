import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "pages/leaguePage/leaguePage.css";
import axios from "axios";
import TeamsList from "pages/teamsList";

export default function LeaguePage(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchLeague() {
      setLoading(true)  
      const url = `http://api.football-data.org/v2${props.match.url}`;
      await axios
        .get(url, {
          headers: { "X-Auth-Token": "f56fb14a54c045df871baee1e6130304" },
          type: "GET",
        })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((e) => console.error(e));
    }
    fetchLeague();
  }, []);

  return (
    <div className="main-container">
      <div className='league-name'>{data.name}</div>
        <Switch>
          <Route exact path={`${props.match.url}/`} render={(routeProps)=>{
            return <TeamsList league={true} {...routeProps}/>
          }}  />
          
          <Route path={`${props.match.url} /matches`}   />
        </Switch>
    </div>
  );
}
