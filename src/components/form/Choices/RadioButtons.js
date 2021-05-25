import React, { memo } from "react";
import RadioButtonsGroup from "../../RadioButtonsGroup";

const RadioButtons = (props) => {
  return (
    <RadioButtonsGroup
      formLabel={props.formLabel}
      buttons={[
        { value: "rb1", label: "No.1" },
        { value: "rb2", label: "No.2" },
        { value: "rb3", label: "No.3" },
        { value: "rb4", label: "No.4" },
      ]}
      onChange={props.onChange}
      initialValue={props.initialValue}
    />
  );
};

export default memo(RadioButtons);
