import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: 600,
  },
}));

export default (props) => {
  const { id, value } = props;
  const classes = useStyles();

  return (
    <label className={classes.label} htmlFor={id}>
      {value}
    </label>
  );
};
