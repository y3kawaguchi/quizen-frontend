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
  },
}));

export default (props) => {
  const { id, label, fullWidth, multiline, required, rows, onChange } = props;
  const classes = useStyles();

  return (
    <dl>
      <dt>
        <label htmlFor={id}>{label}</label>
      </dt>
      <dd style={{ marginLeft: 0 }}>
        <TextField
          id={id}
          InputProps={{ classes }}
          fullWidth={fullWidth}
          margin="dense"
          multiline={multiline}
          required={required}
          rows={rows}
          onChange={onChange}
        />
      </dd>
    </dl>
  );
};
