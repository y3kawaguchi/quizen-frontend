import { withStyles } from "@material-ui/core";
import React from "react";

const styles = {
  container: {
    flexGrow: 1,
    padding: 0,
    minWidth: 0,
  },
};

export default withStyles(styles)((props) => {
  const { children, classes } = props;
  return <main className={classes.container}>{children}</main>;
});
