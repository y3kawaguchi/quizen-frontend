import { Box } from "@material-ui/core";
import React, { Fragment, memo } from "react";
import TextInput from "../uikit/TextInput";

const Quiz = (props) => {
  const { handleTitleInput, handleQuestionInput, handleExplanationInput } = props;

  return (
    <Fragment>
      <Box
        fontSize={24}
        borderBottom={"1px solid #C0C0C0"}
        mb={1}
        style={{ width: "32rem", height: "2rem" }}
      >
        Quiz
      </Box>
      <TextInput id="title" label="Title" fullWidth={true} onChange={handleTitleInput} required />
      <TextInput
        id="question"
        label="Question"
        fullWidth={true}
        multiline={true}
        rows={3}
        onChange={handleQuestionInput}
        required
      />
      <TextInput
        id="explanation"
        label="Explanation"
        fullWidth={true}
        multiline={true}
        rows={3}
        onChange={handleExplanationInput}
        required
      />
    </Fragment>
  );
};

export default memo(Quiz);
