import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "../components/PrimaryButton";
import RadioButtonsGroup from "../components/RadioButtonsGroup";
import Spacer from "../components/Spacer";
import TextInput from "../components/TextInput";
import { showRegister } from "../redux/actions";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    padding: 0,
  },
}));

export default (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showRegister());
  }, []);

  const [title, setTitle] = useState("");
  const MemoizedTitleTextInput = useMemo(() => {
    return (
      <TextInput
        required
        label="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
    );
  }, [title]);

  const [question, setQuestion] = useState("");
  const MemoizedQuestionTextInput = useMemo(() => {
    return (
      <TextInput
        required
        label="Question"
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
    );
  }, [question]);

  const [explanation, setExplanation] = useState("");
  const MemoizedExplanationTextInput = useMemo(() => {
    return (
      <TextInput
        required
        label="Explanation"
        onChange={(e) => {
          setExplanation(e.target.value);
        }}
      />
    );
  }, [explanation]);

  const [choices1, setChoices1] = useState("");
  const MemoizedChoices1TextInput = useMemo(() => {
    return (
      <TextInput
        required
        label="Choices1"
        onChange={(e) => {
          setChoices1(e.target.value);
        }}
      />
    );
  }, [choices1]);

  const [choices2, setChoices2] = useState("");
  const MemoizedChoices2TextInput = useMemo(() => {
    return (
      <TextInput
        required
        label="Choices2"
        onChange={(e) => {
          setChoices2(e.target.value);
        }}
      />
    );
  }, [choices2]);

  const [choices3, setChoices3] = useState("");
  const MemoizedChoices3TextInput = useMemo(() => {
    return (
      <TextInput
        required
        label="Choices3"
        onChange={(e) => {
          setChoices3(e.target.value);
        }}
      />
    );
  }, [choices3]);

  const [choices4, setChoices4] = useState("");
  const MemoizedChoices4TextInput = useMemo(() => {
    return (
      <TextInput
        required
        label="Choices4"
        onChange={(e) => {
          setChoices4(e.target.value);
        }}
      />
    );
  }, [choices4]);

  const [correct, setCorrect] = useState("number1");
  const MemoizedRadioButtonsGroup = useMemo(() => {
    return (
      <RadioButtonsGroup
        formLabel={"Which is correct ?"}
        buttons={[
          { value: "number1", label: "No.1" },
          { value: "number2", label: "No.2" },
          { value: "number3", label: "No.3" },
          { value: "number4", label: "No.4" },
        ]}
        onChange={(e) => {
          setCorrect(e.target.value);
        }}
        initialValue={correct}
      />
    );
  }, [correct]);

  return (
    <div className={classes.container}>
      <h2>Quiz</h2>
      {MemoizedTitleTextInput}
      {MemoizedQuestionTextInput}
      {MemoizedExplanationTextInput}
      <h2>Choices</h2>
      {MemoizedChoices1TextInput}
      {MemoizedChoices2TextInput}
      {MemoizedChoices3TextInput}
      {MemoizedChoices4TextInput}
      <Spacer size={32} />
      {MemoizedRadioButtonsGroup}
      <PrimaryButton
        label={"Regist"}
        onClick={() => {
          console.log("Registed!");
        }}
      />
    </div>
  );
};
