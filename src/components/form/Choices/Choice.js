import React, { memo } from "react";
import TextInput from "../TextInput";

const Choice = (props) => {
  const { id, label, onChange } = props;

  return <TextInput id={id} label={label} fullWidth={true} onChange={onChange} required />;
};

export default memo(Choice);
