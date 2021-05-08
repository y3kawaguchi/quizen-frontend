import { call, put, takeEvery } from "redux-saga/effects";
import QuizAPI from "../api/QuizAPI";
import * as actions from "./actions";

function* loadQuizSaga(action) {
  const quizId = action.payload;
  try {
    const { body } = yield call(QuizAPI.fetchQuiz, quizId);
    if (body) {
      yield put(actions.loadQuizSucceeded(body));
    } else {
      yield put(actions.loadQuizFailed());
    }
  } catch (error) {
    console.error(`failed to fetch quiz (quiz_id: ${quizId})`);
    yield put(actions.loadQuizFailed());
  }
}

function* loadQuizzesSaga(action) {
  try {
    const { body } = yield call(QuizAPI.fetchQuizzes);
    if (body) {
      yield put(actions.loadQuizzesSucceeded(body));
    } else {
      yield put(actions.loadQuizzesFailed());
    }
  } catch (error) {
    console.error("failed to fetch quizzes", error);
    yield put(actions.loadQuizzesFailed());
  }
}

export default function* () {
  yield takeEvery("LOAD_QUIZ", loadQuizSaga);
  yield takeEvery("LOAD_QUIZZES", loadQuizzesSaga);
}
