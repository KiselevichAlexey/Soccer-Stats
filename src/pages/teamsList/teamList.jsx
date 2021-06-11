import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingProgress from "components/loadingProgress";
import SearchForm from "components/searchForm";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Divider } from "@material-ui/core";
import Pagination from "components/pagination";

function TeamItem(props) {
  const { name, schortName, crestUrl, area, id } = props.team;
  return (
    <Link to={`/teams/${id}`}>
      <ListItem style={{ background: "rgba(255, 255, 255, 0.807)" }}>
        <ListItemAvatar>
          <img
            style={{ maxWidth: 50, height: 50 }}
            src={crestUrl}
            alt={schortName}
          />
        </ListItemAvatar>
        <ListItemText
          style={{ color: "#333" }}
          primary={name.toUpperCase()}
          secondary={area.name}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="forward">
            <ArrowForwardIosIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Link>
  );
}

function TeamsList(props) {
  const defaultSearchValue = props.location.search.slice(1);
  const [search, setSearch] = useState(defaultSearchValue);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchTeams() {
      setLoading(true);
      const url = `http://api.football-data.org/v2/teams?areas=2077`;
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    setPage(1);
    props.history.push({
      pathname: "/teams",
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
      {loading ? <LoadingProgress /> : <List> {pageList} </List>}
      <Pagination
        changePage={(event, value) => setPage(value)}
        count={Math.ceil(teamsList.length / itemInPage)}
      />
    </>
  );
}

export default TeamsList;
