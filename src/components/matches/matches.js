import axios from "axios";
import LoadingProgress from "components/loadingProgress";
import React, { useEffect, useState } from "react";
import "./matches.css";

function MatchTable(props) {
  console.log(props);
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
            {props.data.map((row) => (
              <tr key={row.id}>
                <td className="home-teams">{row.homeTeam.name}</td>
                <td className="score">
                  {` ${row.score.fullTime.homeTeam} - ${row.score.fullTime.awayTeam}`}
                </td>
                <td className="away-team">{row.awayTeam.name}</td>
                <td className="date">{row.utcDate.slice(0, 10)}</td>
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
          setMatches(res.data.matches);
          setLoading(false);
        })
        .catch((e) => console.error(e));
    }
    fetchTeams();
  }, []);
  return (
    <>{loading ? <LoadingProgress /> : <MatchTable data={matches} />}</>
  );
}
