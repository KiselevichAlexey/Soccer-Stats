import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from "@material-ui/lab/Pagination"

const useStyles = makeStyles((theme) => ({
  root: {
      display:'flex',
      justifyContent:'center',
      margin:'auto',
      '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function MyPagination(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination  onChange={props.changePage} count={props.count} color="primary" />
    </div>
  );
}