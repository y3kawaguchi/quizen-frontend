import { Box } from "@material-ui/core";
import React, { Fragment, memo } from "react";
import Spacer from "../../uikit/Spacer";
import ToggleButtons from "../../uikit/ToggleButtons";
import Choice from "./Choice";

const Choices = (props) => {
  const handleChoices = props.handleChoices;
  const correct = props.correct;
  const handleToggleButtons = props.handleToggleButtons;
  const initialRadioSelect = props.initialRadioSelect;

  return (
    <Fragment>
      <Box
        fontSize={24}
        borderBottom={"1px solid #C0C0C0"}
        mb={1}
        style={{ width: "32rem", height: "2rem" }}
      >
        Choices
      </Box>
      {handleChoices.map((handleChoice, index) => (
        <Choice
          key={index + 1}
          id={String(index + 1)}
          label={"No." + (index + 1)}
          onChange={handleChoice}
        />
      ))}
      <Spacer size={8} />
      <Box fontWeight={600} style={{ marginBottom: 4 }}>
        Which is correct ?
      </Box>
      <ToggleButtons value={correct} onChange={handleToggleButtons} />
    </Fragment>
  );
};

export default memo(Choices);
