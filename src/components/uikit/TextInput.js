import React, { memo } from "react";
import StyledLabel from "./StyledLabel";
import StyledTextField from "./StyledTextField";

const TextInput = (props) => {
  const { id, label, fullWidth, multiline, required, rows, onChange } = props;

  return (
    <dl style={{ margin: 5 }}>
      <dt>
        <StyledLabel id={id} value={label} />
      </dt>
      <dd style={{ marginLeft: 0 }}>
        <StyledTextField
          id={id}
          fullWidth={fullWidth}
          multiline={multiline}
          required={required}
          rows={rows}
          onChange={onChange}
        />
      </dd>
    </dl>
  );
};

export default memo(TextInput);
