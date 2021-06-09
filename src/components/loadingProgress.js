import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows:'90vh',
    justifyItems:'center',
    alignItems:'center',
    '& > * + *': {
    //   marginLeft: theme.spacing(2),
    },
  },
}));

export default function LoadingProgress() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={200} thickness={2}/>
    </div>
  );
}