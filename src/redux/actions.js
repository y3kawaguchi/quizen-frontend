// This file defines ActionCreators.
// ActionCreater generate action based on screen input.
import { createAction } from "redux-actions";

export const loadQuiz = createAction("LOAD_QUIZ", (quizId) => quizId);
export const loadQuizSucceeded = createAction("LOAD_QUIZ_SUCCEEDED", (quiz) => quiz);
export const loadQuizzes = createAction("LOAD_QUIZZES", (params) => params);
export const loadQuizzesSucceeded = createAction("LOAD_QUIZZES_SUCCEEDED", (quizzes) => quizzes);
