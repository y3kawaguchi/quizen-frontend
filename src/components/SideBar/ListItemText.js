import { ListItemText as ListItemTextBase, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme) => ({
  disabled: {
    color: theme.palette.grey["200"],
  },
  notSelected: {
    color: theme.palette.primary.contrastText,
  },
  selected: {
    color: theme.palette.primary.main,
  },
});

const toClassName = ({ disabled = false, selected = false, classes }) => {
  if (disabled) {
    return classes.disabled;
  }
  return selected ? classes.selected : classes.notSelected;
};

export default withStyles(styles)((props) => {
  return (
    <ListItemTextBase
      classes={{ primary: toClassName(props) }}
      primary={props.label}
      align="center"
      style={{ padding: 0 }}
    />
  );
});
