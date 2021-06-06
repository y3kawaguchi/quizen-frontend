import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    display: "block",
    width: 500,
    padding: 5,
    fontSize: 16,
    outline: "none",
    borderRadius: 6,
    backgroundColor: "#fcfcfb",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
}));

const StyledTextField = (props) => {
  const { id, fullWidth, multiline, required, rows, onChange } = props;
  const classes = useStyles();

  return (
    <TextField
      id={id}
      InputProps={{ classes }}
      inputProps={{
        style: {
          padding: 5,
        },
      }}
      fullWidth={fullWidth}
      margin="dense"
      multiline={multiline}
      required={required}
      rows={rows}
      onChange={onChange}
    />
  );
};

export default StyledTextField;
