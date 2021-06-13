import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SeasonSelect(props) {
  const classes = useStyles();
  const [season, setSeason] = React.useState('');

  const handleChange = (event) => {
    setSeason(event.target.value);
  };
return(<FormControl className={classes.formControl}>
<InputLabel id="season-label">Season</InputLabel>
<Select
  labelId="season-label"
  id="season"
  value={season}
  onChange={handleChange}
>
          {props?.season
            ?.filter((el) => el.startDate.slice(0, 4) > 2017)
            .map((el) => (
              <Link key={el.id} to='' >
               <MenuItem  value={el.startDate.slice(0, 4)}>
        {el.startDate.slice(0, 4)}-{el.endDate.slice(0, 4)}
               </MenuItem>
              </Link>    ))}
</Select>
</FormControl>)
}