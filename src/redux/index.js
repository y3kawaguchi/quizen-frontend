import { handleActions } from "redux-actions";
import * as actions from "./actions";

const initialState =
  process.env.NODE_ENV === "storybook"
    ? {
        loadingQuiz: false,
        loadingQuizzes: false,
        quiz: {
          id: 1,
          title: "test_title_1",
          question: "test_question_1",
          choices: [
            {
              quiz_id: 1,
              choice_id: 1,
              content: "test_choice_1",
              is_correct: false,
              created_at: "2021-06-05T21:40:12.864771Z",
              updated_at: "2021-06-05T21:40:12.864771Z",
            },
            {
              quiz_id: 1,
              choice_id: 2,
              content: "test_choice_2",
              is_correct: false,
              created_at: "2021-06-05T21:40:12.866912Z",
              updated_at: "2021-06-05T21:40:12.866912Z",
            },
            {
              quiz_id: 1,
              choice_id: 3,
              content: "test_choice_3",
              is_correct: true,
              created_at: "2021-06-05T21:40:12.868433Z",
              updated_at: "2021-06-05T21:40:12.868433Z",
            },
            {
              quiz_id: 1,
              choice_id: 4,
              content: "test_choice_4",
              is_correct: false,
              created_at: "2021-06-05T21:40:12.869776Z",
              updated_at: "2021-06-05T21:40:12.869776Z",
            },
          ],
          explanation: "test_explanation_1",
          created_at: "2021-06-05T21:40:12.859655Z",
          updated_at: "2021-06-05T21:40:12.859655Z",
        },
        quizzes: [
          {
            id: 1,
            title: "test_title_1",
            question: "test_question_1",
            choices: null,
            explanation: "test_explanation_1",
            created_at: "2021-06-05T21:40:12.859655Z",
            updated_at: "2021-06-05T21:40:12.859655Z",
          },
          {
            id: 2,
            title: "test_title_2",
            question: "test_question_2",
            choices: null,
            explanation: "test_explanation_2",
            created_at: "2021-06-05T21:40:12.859655Z",
            updated_at: "2021-06-05T21:40:12.859655Z",
          },
          {
            id: 3,
            title: "test_title_3",
            question: "test_question_3",
            choices: null,
            explanation: "test_explanation_3",
            created_at: "2021-06-05T21:40:12.859655Z",
            updated_at: "2021-06-05T21:40:12.859655Z",
          },
        ],
        registeringQuiz: false,
        sideBarItem: "list",
      }
    : {
        loadingQuiz: false,
        loadingQuizzes: false,
        quiz: {},
        quizzes: {},
        registeringQuiz: false,
        sideBarItem: "top",
      };

const reducer = handleActions(
  {
    // キーについて
    //   switchで書く場合のアクションタイプをオブジェクトのキーとしますが、
    //   ここではcreateActionsで作られたアクション自体を [] で囲んでいます。
    //   オブジェクトのキーに[]で囲んだ変数を入れると、文字列と判定され、
    //   toString() が呼ばれます。
    //   createActionsで作られたアクションはtoStringでアクションタイプを返すので、
    //   このように「このアクションが発行されたら」と、直感的な書き方にすることができます。
    // バリューについて
    //   バリューには関数を作成します。
    //   引数は通常のreducerと同様、現状のstateと、actionが渡されます。
    //   actionは以下の形式で渡されます。
    //   {
    //     type    : {symbol|string}, // アクションタイプ
    //     payload : {any},           // メインの情報
    //     error   : {boolean},       // エラーかどうか
    //     meta    : {any},           // payloadに乗らなかった情報
    //   }
    // eslint-disable-next-line no-unused-vars
    [actions.loadQuiz]: (state, action) => ({
      ...state,
      loadingQuiz: true,
    }),
    [actions.loadQuizSucceeded]: (state, action) => ({
      ...state,
      loadingQuiz: false,
      quiz: action.payload,
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.loadQuizFailed]: (state, action) => ({
      ...state,
      loadingQuiz: false,
    }),
    // [actions.loadQuizzes]: (state, action) => Object.assign({}, state, { loadingQuizzes: true }),
    // eslint-disable-next-line no-unused-vars
    [actions.loadQuizzes]: (state, action) => ({
      ...state,
      loadingQuizzes: true,
    }),
    [actions.loadQuizzesSucceeded]: (state, action) => ({
      ...state,
      loadingQuizzes: false,
      quizzes: action.payload,
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.loadQuizzesFailed]: (state, action) => ({
      ...state,
      loadingQuizzes: false,
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.registQuiz]: (state, action) => ({
      ...state,
      registeringQuiz: true,
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.registQuizSucceeded]: (state, action) => ({
      ...state,
      registeringQuiz: false,
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.registQuizFailed]: (state, action) => ({
      ...state,
      registeringQuiz: false,
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.showList]: (state, action) => ({
      ...state,
      sideBarItem: "list",
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.showTop]: (state, action) => ({
      ...state,
      sideBarItem: "top",
    }),
    // eslint-disable-next-line no-unused-vars
    [actions.showRegister]: (state, action) => ({
      ...state,
      sideBarItem: "register",
    }),
  },
  initialState
);

export default reducer;
