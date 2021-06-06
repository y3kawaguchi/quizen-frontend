import { makeStyles } from "@material-ui/core/styles";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Choices from "../components/form/Choices";
import Quiz from "../components/form/Quiz";
import PrimaryButton from "../components/uikit/PrimaryButton";
import Spacer from "../components/uikit/Spacer";
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

const RegisterScreen = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRegister());
  }, []);

  const [title, setTitle] = useState(""),
    [question, setQuestion] = useState(""),
    [explanation, setExplanation] = useState(""),
    [correct, setCorrect] = useState("one");

  const handleTitleInput = useCallback((e) => {
      setTitle(e.target.value);
    }, []),
    handleQuestionInput = useCallback((e) => {
      setQuestion(e.target.value);
    }, []),
    handleExplanationInput = useCallback((e) => {
      setExplanation(e.target.value);
    }, []),
    handleToggleButtons = useCallback((e, newCorrect) => {
      setCorrect(newCorrect);
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
      "one" === correct,
      "two" === correct,
      "three" === correct,
      "four" === correct,
    ],
  };

  return (
    <div className={classes.container}>
      <Spacer size={16} />
      <Quiz
        handleTitleInput={handleTitleInput}
        handleQuestionInput={handleQuestionInput}
        handleExplanationInput={handleExplanationInput}
      />
      <Spacer size={32} />
      <Choices
        handleChoices={handleChoices}
        correct={correct}
        handleToggleButtons={handleToggleButtons}
        initialRadioSelect={correct}
      />
      <Spacer size={48} />
      <PrimaryButton
        label={"Regist"}
        onClick={() => {
          dispatch(registQuiz(payload));
        }}
      />
    </div>
  );
};

export default RegisterScreen;
