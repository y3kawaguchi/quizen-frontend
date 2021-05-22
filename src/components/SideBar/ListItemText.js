import { ListItemText as ListItemTextBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  disabled: {
    color: theme.palette.grey["200"],
  },
  notSelected: {
    color: theme.palette.secondary.contrastText,
  },
  selected: {
    color: theme.palette.secondary.main,
  },
}));

const getClassName = ({ disabled = false, selected = false }) => {
  const classes = useStyles();
  if (disabled) {
    return classes.disabled;
  }
  return selected ? classes.selected : classes.notSelected;
};

export default (props) => {
  return (
    <ListItemTextBase
      classes={{ primary: getClassName(props) }}
      primary={props.label}
      align="center"
      style={{ padding: 0 }}
    />
  );
};
