import { withStyles } from "@material-ui/core";
import React from "react";

const styles = {
  container: {
    flex: 1,
    flexDirection: "columns",
    display: "flex",
    padding: 0,
  },
};

export default withStyles(styles)((props) => {
  const { children, classes } = props;
  return <div className={classes.container}>{children}</div>;
});
