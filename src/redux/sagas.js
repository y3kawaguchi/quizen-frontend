import { call, put, takeEvery } from "redux-saga/effects";
import QuizAPI from "../api/QuizAPI";
import * as actions from "./actions";

function* loadQuizzesSaga(action) {
  try {
    const { body } = yield call(QuizAPI.fetchQuizzes);
    if (body) {
      yield put(actions.loadQuizzesSucceeded(body));
    } else {
      yield put(actions.loadQuizzesFailed());
    }
  } catch (error) {
    console.error("failed to load quizzes", error);
    yield put(actions.loadQuizzesFailed());
  }
}

export default function* () {
  yield takeEvery("LOAD_QUIZZES", loadQuizzesSaga);
}
