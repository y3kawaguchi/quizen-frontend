// This file defines ActionCreators.
// ActionCreater generate action based on screen input.
import { createAction } from "redux-actions";
import * as types from "./types";

export const loadQuiz = createAction(types.LOAD_QUIZ, (quizId) => quizId);
export const loadQuizSucceeded = createAction(types.LOAD_QUIZ_SUCCEEDED, (quiz) => quiz);
export const loadQuizFailed = createAction(types.LOAD_QUIZ_FAILED);
export const loadQuizzes = createAction(types.LOAD_QUIZZES, (params) => params);
export const loadQuizzesSucceeded = createAction(
  types.LOAD_QUIZZES_SUCCEEDED,
  (quizzes) => quizzes
);
export const loadQuizzesFailed = createAction(types.LOAD_QUIZZES_FAILED);
export const registQuiz = createAction(types.REGIST_QUIZ, (payload) => payload);
export const registQuizSucceeded = createAction(types.REGIST_QUIZ_SUCCEEDED);
export const registQuizFailed = createAction(types.REGIST_QUIZ_FAILED);
export const showList = createAction(types.SHOW_LIST);
export const showTop = createAction(types.SHOW_TOP);
export const showRegister = createAction(types.SHOW_REGISTER);
