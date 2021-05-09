import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { loadQuiz } from "../redux/actions";
import Choices from "./Choices";
import LoadingScreen from "./LoadingScreen";

export default () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const quizId = location.pathname.split("/")[2];
  // https://ja.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    dispatch(loadQuiz(quizId));
  }, []);

  const quiz = useSelector((state) => state.quizen.quiz);
  const choices = quiz.choices;

  if (Object.keys(quiz).length !== 0) {
    return (
      <React.Fragment>
        <h2>{quiz.question}</h2>
        <Choices
          choices1={choices[0]}
          choices2={choices[1]}
          choices3={choices[2]}
          choices4={choices[3]}
        />
        <h2>{quiz.answer}</h2>
      </React.Fragment>
    );
  } else {
    return <LoadingScreen />;
  }
};
