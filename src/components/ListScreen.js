import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadQuizzes, showList } from "../redux/actions";
import TableFrame from "./frames/TableFrame";
import LoadingScreen from "./LoadingScreen";
import Table from "./Table";

export default () => {
  const dispatch = useDispatch();

  // https://ja.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    dispatch(loadQuizzes("params"));
    dispatch(showList());
  }, []);

  const quizzes = useSelector((state) => state.quizen.quizzes);

  if (Object.keys(quizzes).length !== 0) {
    return (
      <TableFrame>
        <Table quizzes={quizzes} />
      </TableFrame>
    );
  } else {
    return <LoadingScreen />;
  }
};
