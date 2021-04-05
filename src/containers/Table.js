import React from "react";
import Table from "../components/Table";

const createData = (id, question, status, result) => {
  return { id, question, status, result };
};

export default () => {
  // TODO: APIでGETする
  const quizzes = [
    createData(1, "問題1", "未回答", "-"),
    createData(2, "問題2", "未回答", "-"),
    createData(3, "問題3", "未回答", "-"),
    createData(4, "問題4", "未回答", "-"),
    createData(5, "問題5", "未回答", "-"),
  ];

  return <Table quizzes={quizzes} />;
};
