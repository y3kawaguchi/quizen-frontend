import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import ChoicesRow from "./Row";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Choices = (props) => {
  const { choices1, choices2, choices3, choices4 } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={8} spacing={3}>
          <ChoicesRow left={choices1} right={choices2} />
        </Grid>
        <Grid container item xs={8} spacing={3}>
          <ChoicesRow left={choices3} right={choices4} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Choices;
