import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { Fragment } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const ChoicesRow = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={4}>
        <Button className={classes.button} variant="contained">
          {props.left.content}
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button className={classes.button} variant="contained">
          {props.right.content}
        </Button>
      </Grid>
    </Fragment>
  );
};

export default ChoicesRow;
