import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState = {
  loadingQuiz: false,
  loadingQuizzes: false,
  quiz: {},
  quizzes: {},
  sideBarItem: "top",
};

const reducer = handleActions(
  {
    // キーについて
    // 　switchで書く場合のアクションタイプをオブジェクトのキーとしますが、
    // 　ここではcreateActionsで作られたアクション自体を [] で囲んでいます。
    // 　オブジェクトのキーに[]で囲んだ変数を入れると、文字列と判定され、
    // 　toString() が呼ばれます。
    // 　createActionsで作られたアクションはtoStringでアクションタイプを返すので、
    // 　このように「このアクションが発行されたら」と、直感的な書き方にすることができます。
    // バリューについて
    // 　バリューには関数を作成します。
    // 　引数は通常のreducerと同様、現状のstateと、actionが渡されます。
    // 　actionは以下の形式で渡されます。
    //   {
    //     type    : {symbol|string}, // アクションタイプ
    //     payload : {any},           // メインの情報
    //     error   : {boolean},       // エラーかどうか
    //     meta    : {any},           // payloadに乗らなかった情報
    //   }
    [actions.loadQuiz]: (state, action) => ({
      ...state,
      loadingQuiz: true,
    }),
    [actions.loadQuizSucceeded]: (state, action) => ({
      ...state,
      loadingQuiz: false,
      quiz: action.payload,
    }),
    // [actions.loadQuizzes]: (state, action) => Object.assign({}, state, { loadingQuizzes: true }),
    [actions.loadQuizzes]: (state, action) => ({
      ...state,
      loadingQuizzes: true,
    }),
    [actions.loadQuizzesSucceeded]: (state, action) => ({
      ...state,
      loadingQuizzes: false,
      quizzes: action.payload,
    }),
    [actions.showList]: (state, action) => ({
      ...state,
      sideBarItem: "list",
    }),
    [actions.showTop]: (state, action) => ({
      ...state,
      sideBarItem: "top",
    }),
  },
  initialState
);

export default reducer;
