import React from "react";
import Table from "../components/Table";

const createData = (id, title) => {
  return { id, title };
};

export default () => {
  // TODO: APIでGETする
  const quizzes = [
    createData(1, "問題1"),
    createData(2, "問題2"),
    createData(3, "問題3"),
    createData(4, "問題4"),
    createData(5, "問題5"),
  ];

  return <Table quizzes={quizzes} />;
};
