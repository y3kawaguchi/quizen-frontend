import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import Spacer from "./Spacer";

export default (props) => {
  const { buttons, formLabel, initialValue, onChange } = props;

  return (
    <FormControl>
      <FormLabel>{formLabel}</FormLabel>
      <Spacer size={16} />
      <RadioGroup value={initialValue} onChange={onChange}>
        {buttons.map((button, index) => (
          <FormControlLabel
            control={<Radio />}
            label={button.label}
            key={index}
            value={button.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
