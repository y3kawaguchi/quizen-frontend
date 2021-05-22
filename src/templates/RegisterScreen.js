import { Box } from "@material-ui/core";
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
        id="title"
        label="Title"
        fullWidth={true}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        required
      />
    );
  }, [title]);

  const [question, setQuestion] = useState("");
  const MemoizedQuestionTextInput = useMemo(() => {
    return (
      <TextInput
        id="question"
        label="Question"
        fullWidth={true}
        multiline={true}
        rows={3}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        required
      />
    );
  }, [question]);

  const [explanation, setExplanation] = useState("");
  const MemoizedExplanationTextInput = useMemo(() => {
    return (
      <TextInput
        id="explanation"
        label="Explanation"
        fullWidth={true}
        multiline={true}
        rows={3}
        onChange={(e) => {
          setExplanation(e.target.value);
        }}
        required
      />
    );
  }, [explanation]);

  const [choices1, setChoices1] = useState("");
  const MemoizedChoices1TextInput = useMemo(() => {
    return (
      <TextInput
        id="choices1"
        label="Choices1"
        fullWidth={true}
        onChange={(e) => {
          setChoices1(e.target.value);
        }}
        required
      />
    );
  }, [choices1]);

  const [choices2, setChoices2] = useState("");
  const MemoizedChoices2TextInput = useMemo(() => {
    return (
      <TextInput
        id="choices2"
        label="Choices2"
        fullWidth={true}
        onChange={(e) => {
          setChoices2(e.target.value);
        }}
        required
      />
    );
  }, [choices2]);

  const [choices3, setChoices3] = useState("");
  const MemoizedChoices3TextInput = useMemo(() => {
    return (
      <TextInput
        id="choices3"
        label="Choices3"
        fullWidth={true}
        onChange={(e) => {
          setChoices3(e.target.value);
        }}
        required
      />
    );
  }, [choices3]);

  const [choices4, setChoices4] = useState("");
  const MemoizedChoices4TextInput = useMemo(() => {
    return (
      <TextInput
        id="choices4"
        label="Choices4"
        fullWidth={true}
        onChange={(e) => {
          setChoices4(e.target.value);
        }}
        required
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
      <Box
        fontSize={24}
        borderBottom={"1px solid #C0C0C0"}
        style={{ width: "16rem", height: "3rem" }}
      >
        Quiz
      </Box>
      {MemoizedTitleTextInput}
      {MemoizedQuestionTextInput}
      {MemoizedExplanationTextInput}
      <Box
        fontSize={24}
        borderBottom={"1px solid #C0C0C0"}
        style={{ width: "16rem", height: "3rem" }}
      >
        Choices
      </Box>
      {MemoizedChoices1TextInput}
      {MemoizedChoices2TextInput}
      {MemoizedChoices3TextInput}
      {MemoizedChoices4TextInput}
      <Spacer size={32} />
      {MemoizedRadioButtonsGroup}
      <Spacer size={32} />
      <PrimaryButton
        label={"Regist"}
        onClick={() => {
          console.log("Registed!");
        }}
      />
    </div>
  );
};
