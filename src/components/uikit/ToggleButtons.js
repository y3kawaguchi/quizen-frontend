import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 2,
    paddingBottom: 2,
  },
}));

const ToggleButtons = (props) => {
  const value = props.value;
  const handleToggleButtons = props.onChange;
  const classes = useStyles();

  return (
    <ToggleButtonGroup value={value} onChange={handleToggleButtons} exclusive>
      <ToggleButton className={classes.root} value="one">
        No.1
      </ToggleButton>
      <ToggleButton className={classes.root} value="two">
        No.2
      </ToggleButton>
      <ToggleButton className={classes.root} value="three">
        No.3
      </ToggleButton>
      <ToggleButton className={classes.root} value="four">
        No.4
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default memo(ToggleButtons);
