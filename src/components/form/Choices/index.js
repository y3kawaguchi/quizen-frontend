import { Box } from "@material-ui/core";
import React, { Fragment, memo } from "react";
import Spacer from "../../Spacer";
import Choice from "./Choice";
import RadioButtons from "./RadioButtons";

const Choices = (props) => {
  const handleChoices = props.handleChoices;
  const handleRadioButtons = props.handleRadioButtons;
  const initialRadioSelect = props.initialRadioSelect;

  return (
    <Fragment>
      <Box
        fontSize={16}
        borderBottom={"1px solid #C0C0C0"}
        style={{ width: "16rem", height: "2rem" }}
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
      <Spacer size={32} />
      <RadioButtons
        formLabel={"Which is correct ?"}
        onChange={handleRadioButtons}
        initialValue={initialRadioSelect}
      />
      <Spacer size={32} />
    </Fragment>
  );
};

export default memo(Choices);
