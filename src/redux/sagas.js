import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import QuizAPI from "../api/QuizAPI";
import * as actions from "./actions";
import * as types from "./types";

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

function* loadQuizzesSaga() {
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

function* registQuizSaga(action) {
  const payload = action.payload;
  try {
    yield call(QuizAPI.postQuiz, payload);
    yield put(actions.registQuizSucceeded());
  } catch (error) {
    console.error("failed to post quiz", error);
    yield put(actions.registQuizFailed());
  }
}

export default function* () {
  yield takeEvery(types.LOAD_QUIZ, loadQuizSaga);
  yield takeEvery(types.LOAD_QUIZZES, loadQuizzesSaga);
  yield takeLatest(types.REGIST_QUIZ, registQuizSaga);
}
