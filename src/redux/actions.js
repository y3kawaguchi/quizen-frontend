// This file defines ActionCreators.
// ActionCreater generate action based on screen input.
import { createAction } from "redux-actions";

export const loadQuizzes = createAction("LOAD_QUIZZES", (params) => params);
