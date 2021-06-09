import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    right: 0,
    width: "200px",
    height: "35px",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    background: "#fff",
    transition: ".3s",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
      width: "220px",
    },

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "200px",
    },
  },
  searchIcon: {
    color: "black",
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "black",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

 function Search(props) {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={props.onChange}
        placeholder="Поиск…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        defaultValue={props.value}
        name='search'
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}

export default function SearchForm (props){
  return(
    <form onSubmit={props.submit}
    style={{ display: "flex", justifyContent: "center", marginTop:20}}
  >
    < Search
      value={props.value}
    />
    <Button
      variant="contained"
      style={{ margin:'0 10px' }}
      type="submit"
      color="primary"
    >
      Найти
    </Button>
  </form>
  )
}