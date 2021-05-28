import React, { memo } from "react";

const Spacer = (props) => {
  const { axis, size } = props;
  const width = axis === "vertical" ? 1 : size;
  const height = axis === "horizontal" ? 1 : size;
  return (
    <span
      style={{
        display: "block",
        width,
        height,
      }}
    />
  );
};

export default memo(Spacer);
