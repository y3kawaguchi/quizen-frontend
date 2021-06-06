import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  label: {
    fontWeight: 600,
  },
}));

const StyledLabel = (props) => {
  const { id, value } = props;
  const classes = useStyles();

  return (
    <label className={classes.label} htmlFor={id}>
      {value}
    </label>
  );
};

export default StyledLabel;
