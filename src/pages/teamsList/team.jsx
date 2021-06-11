import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { Divider } from "@material-ui/core";

export default function TeamItem(props) {
  const { name, shortName, crestUrl, area, id } = props.team;
  return (
    <Link to={`/teams/${id}`}>
      <ListItem style={{ background: "rgba(255, 255, 255, 0.807)" }}>
        <ListItemAvatar>
          <img
            style={{ maxWidth: 50, height: 50 }}
            src={crestUrl}
            alt={shortName}
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
