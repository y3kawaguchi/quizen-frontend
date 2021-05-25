import { makeStyles } from "@material-ui/core/styles";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Choices from "../components/form/Choices";
import TextInput from "../components/form/TextInput";
import PrimaryButton from "../components/PrimaryButton";
import Spacer from "../components/Spacer";
import { registQuiz, showRegister } from "../redux/actions";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRegister());
  }, []);

  const [title, setTitle] = useState(""),
    [question, setQuestion] = useState(""),
    [explanation, setExplanation] = useState(""),
    [correct, setCorrect] = useState("rb1");

  const handleTitleInput = useCallback((e) => {
      setTitle(e.target.value);
    }, []),
    handleQuestionInput = useCallback((e) => {
      setQuestion(e.target.value);
    }, []),
    handleExplanationInput = useCallback((e) => {
      setExplanation(e.target.value);
    }, []),
    handleRadioButtons = useCallback((e) => {
      setCorrect(e.target.value);
    }, []);

  const choices = new Array(4),
    setChoices = new Array(4),
    handleChoices = new Array(4);
  for (let i = 0; i < 4; i++) {
    [choices[i], setChoices[i]] = useState("");
    handleChoices[i] = useCallback((e) => {
      setChoices[i](e.target.value);
    }, []);
  }

  const payload = {
    title: title,
    question: question,
    explanation: explanation,
    choice_contents: [...choices],
    choice_is_corrects: [
      "rb1" === correct,
      "rb2" === correct,
      "rb3" === correct,
      "rb4" === correct,
    ],
  };

  return (
    <div className={classes.container}>
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
      <Spacer size={32} />
      <Choices
        handleChoices={handleChoices}
        handleRadioButtons={handleRadioButtons}
        initialRadioSelect={correct}
      />
      <Spacer size={32} />
      <TextInput
        id="explanation"
        label="Explanation"
        fullWidth={true}
        multiline={true}
        rows={3}
        onChange={handleExplanationInput}
        required
      />
      <Spacer size={32} />
      <PrimaryButton
        label={"Regist"}
        onClick={() => {
          dispatch(registQuiz(payload));
        }}
      />
    </div>
  );
};
