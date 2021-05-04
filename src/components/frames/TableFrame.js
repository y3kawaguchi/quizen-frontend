import { withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme) => ({
  container: {
    padding: theme.spacing(3),
    // backgroundColor: "F6F7F9",
    // backgroundColor: "F8F9FA",
    minHeight: 660,
  },
});

export default withStyles(styles)((props) => {
  const { children, classes } = props;
  return <div className={classes.container}>{children}</div>;
});
