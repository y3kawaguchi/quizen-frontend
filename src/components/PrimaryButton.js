import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "#000",
    fontSize: 16,
    height: 48,
    marginBottom: 16,
    width: 256,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  );
};
