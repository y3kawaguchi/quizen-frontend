import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    flexDirection: "row",
    display: "flex",
    padding: 0,
  },
}));

const BodyFrame = (props) => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.container}>{children}</div>;
};

export default BodyFrame;
