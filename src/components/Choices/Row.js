import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Row = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Button className={classes.button} variant="contained">
          {props.left}
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button className={classes.button} variant="contained">
          {props.right}
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Row;
