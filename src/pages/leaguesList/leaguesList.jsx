import React, { useEffect, useState } from "react";
import Card from "pages/leaguesList/card/card";
import "./leaguesList.css";
import axios from "axios";
import LoadingProgress from "components/loadingProgress";
import SearchForm from "components/searchForm";

function LeaguesList(props) {
  const defaultSearchValue =props.location.search.slice(1)
  const [search, setSearch] = useState(defaultSearchValue);
  const [loading, setLoading] = useState(false);
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    async function fetchLeagues() {
      setLoading(true);
      const url = `http://api.football-data.org/v2/competitions?areas=2077&plan=TIER_ONE`;
      await axios
        .get(url, {
          headers: { "X-Auth-Token": "f56fb14a54c045df871baee1e6130304" },
          type: "GET",
        })
        .then(
          (res) => {
            setLeagues(res.data.competitions);
            setLoading(false);
          },
          (error) => console.log(error)
        );
    }
    fetchLeagues();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    props.history.push({
      pathname: "/competitions",
      search: `?${e.target.search.value}`,
    });
  };

  const leaguesList = leagues
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .map((el) => <Card key={el.id} card={el}></Card>);

  return (
    <>
      <SearchForm
        submit={handleSubmit}
        value={defaultSearchValue}
      />
      {loading ? (
        <LoadingProgress />
      ) : (
        <div className="grid"> {leaguesList} </div>
      )}
      ;
    </>
  );
}

export default LeaguesList;