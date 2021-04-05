import { Typography } from "@material-ui/core";
import React from "react";
import { Link as OriginLink } from "react-router-dom";

export default (props) => {
  const { classes, to, label, typographyVariant = "body2" } = props;
  return (
    <OriginLink className={classes.link} to={to}>
      <Typography className={classes.linkLabel} variant={typographyVariant}>
        {label}
      </Typography>
    </OriginLink>
  );
};
