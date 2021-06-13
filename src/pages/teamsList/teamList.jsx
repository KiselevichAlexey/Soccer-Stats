import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingProgress from "components/loadingProgress";
import SearchForm from "components/searchForm";
import List from "@material-ui/core/List";
import Pagination from "components/pagination";
import TeamItem from "./team";

function TeamsList(props) {
  const defaultSearchValue = props.location.search.slice(1);
  const [search, setSearch] = useState(defaultSearchValue);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
 
  useEffect(() => {
    async function fetchTeams() {
      setLoading(true);
      let url = `http://api.football-data.org/v2/teams?areas=2077`;
      if (props.league){
        url = `http://api.football-data.org/v2/${props.location.pathname}?season=2020`;
      }
      await axios
        .get(url, {
          headers: { "X-Auth-Token": "f56fb14a54c045df871baee1e6130304" },
          type: "GET",
        })
        .then(
          (res) => {
            setData(res.data.teams);
            setLoading(false);
          },
          (error) => console.log(error)
        );
    }
    fetchTeams();
  }, [props.league,props.location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setPage(1);
    props.history.push({
      pathname: props.location.pathname,
      search: `?${e.target.search.value}`,
    });
  };

  const teamsList = data
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .map((el) => <TeamItem key={el.id} team={el}></TeamItem>);

  const itemInPage = 20;
  const pageList = teamsList.slice(
    (page - 1) * itemInPage,
    (page - 1) * itemInPage + itemInPage
  );
  return (
    <>
      <SearchForm submit={handleSubmit} value={defaultSearchValue} />
      {loading ? (
        <LoadingProgress />
      ) : (
        <List style={{ maxWidth: "600px", margin: "auto" }}>{pageList}</List>
      )}
      <Pagination
        changePage={(event, value) => setPage(value)}
        count={Math.ceil(teamsList.length / itemInPage)}
      />
    </>
  );
}

export default TeamsList;
