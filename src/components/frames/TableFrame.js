import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    // backgroundColor: "F6F7F9",
    // backgroundColor: "F8F9FA",
    minHeight: 660,
  },
}));

export default (props) => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};
