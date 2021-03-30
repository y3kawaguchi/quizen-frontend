import React from "react";
import Choices from "./Choices";

export default (props) => {
  const { choices } = props;
  return (
    <React.Fragment>
      <h2>問題</h2>
      <Choices
        choices1={choices[0]}
        choices2={choices[1]}
        choices3={choices[2]}
        choices4={choices[3]}
      />
      <h2>解答</h2>
    </React.Fragment>
  );
};
