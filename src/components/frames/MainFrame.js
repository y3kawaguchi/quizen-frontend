import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1,
    padding: 0,
    minWidth: 0,
  },
}));

const MainFrame = (props) => {
  const classes = useStyles();
  const { children } = props;
  return <main className={classes.container}>{children}</main>;
};

export default MainFrame;
