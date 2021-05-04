// This file defines ActionCreators.
// ActionCreater generate action based on screen input.
import { createAction } from "redux-actions";

export const loadQuiz = createAction("LOAD_QUIZ", (quizId) => quizId);
export const loadQuizSucceeded = createAction("LOAD_QUIZ_SUCCEEDED", (quiz) => quiz);
export const loadQuizFailed = createAction("LOAD_QUIZ_FAILED");
export const loadQuizzes = createAction("LOAD_QUIZZES", (params) => params);
export const loadQuizzesSucceeded = createAction("LOAD_QUIZZES_SUCCEEDED", (quizzes) => quizzes);
export const loadQuizzesFailed = createAction("LOAD_QUIZZES_FAILED");
export const showList = createAction("SHOW_LIST");
export const showTop = createAction("SHOW_TOP");
