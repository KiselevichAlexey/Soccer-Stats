import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingProgress from "components/loadingProgress";
import SearchForm from "components/searchForm";

function TeamsList(props) {
  const defaultSearchValue =props.location.search.slice(1)
  const [search, setSearch] = useState(defaultSearchValue);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

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
            setData(res.data);
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
    props.history.push({
      pathname: "/teams",
      search: `?${e.target.search.value}`,
    });
  };

  const teamsList = data
    // .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    // .map((el) => <Card key={el.id} card={el}></Card>);

  return (
    <>
      <SearchForm
        submit={handleSubmit}
        value={defaultSearchValue}
      />
      {loading ? (
        <LoadingProgress />
      ) : (
        <div className="grid"> {console.log(data)} </div>
      )}
      ;
    </>
  );
}

export default TeamsList;