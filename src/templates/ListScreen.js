import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableFrame from "../components/frames/TableFrame";
import QuizTable from "../components/Table";
import { loadQuizzes, showList } from "../redux/actions";
import LoadingScreen from "./LoadingScreen";

const ListScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadQuizzes("params"));
    dispatch(showList());
  }, []);

  const quizzes = useSelector((state) => state.quizen.quizzes);

  if (Object.keys(quizzes).length !== 0) {
    return (
      <TableFrame>
        <QuizTable quizzes={quizzes} />
      </TableFrame>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default ListScreen;
