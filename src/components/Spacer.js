import React from "react";

export default (props) => {
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
