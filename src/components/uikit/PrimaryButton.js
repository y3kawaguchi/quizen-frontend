import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { memo } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 14,
    height: 32,
    marginBottom: 16,
    width: 160,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  );
};

export default memo(PrimaryButton);
