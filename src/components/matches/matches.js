import axios from "axios";
import LoadingProgress from "components/loadingProgress";
import Pagination from "components/pagination";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./matches.css";

function MatchTable(props) {
  
  return (
    <>
      <div>
        <table className="match-table">
          <thead>
            <tr>
              <th className="home-teams">Home Team</th>
              <th className="score">Score</th>
              <th className="away-team">Away Team</th>
              <th className="date">Date</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((item) => (
              <tr key={item.id}>
                <td className="home-teams">
                <Link to={`/teams/${item.homeTeam.id}/matches`}>
                  {item.homeTeam.name}
                  </Link>
                  </td>
                <td className="score">
                  {` ${item.score.fullTime.homeTeam} - ${item.score.fullTime.awayTeam}`}
                </td>
                <td className="away-team">
                  <Link to={`/teams/${item.awayTeam.id}/matches`}>
                  {item.awayTeam.name}
      
                  </Link>
                  </td>
                <td className="date">{item.utcDate.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default function MatchList(props) {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchTeams() {
      setLoading(true);
      const url = `http://api.football-data.org/v2${props.match.url}`;
      await axios
        .get(url, {
          headers: { "X-Auth-Token": "f56fb14a54c045df871baee1e6130304" },
          type: "GET",
        })
        .then((res) => {
          console.log(res.data);
          setMatches(res.data.matches);
          setLoading(false);
        })
        .catch((e) => console.error(e));
    }
    fetchTeams();
  }, [props.match.url]);

  const itemInPage = 20;
  const matchesList = matches.slice(
    (page - 1) * itemInPage,
    (page - 1) * itemInPage + itemInPage
  );
  return (
    <>
      {loading ? (
        <LoadingProgress />
      ) : (
        <MatchTable data={matchesList} />
      )}
      <Pagination
        changePage={(event, value) => setPage(value)}
        count={Math.ceil(matches.length / itemInPage)}
      />
    </>
  );
}
