import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import TableFrame from "../components/frames/TableFrame";
import ListScreen from "../components/ListScreen";
import { loadQuiz, loadQuizzes } from "../redux/actions";

export class ListScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TableFrame>
        <ListScreen />
        <Button onClick={() => this.props.loadQuizzes("params")} variant="contained">
          【開発用】LOAD_QUIZZES
        </Button>
        <Button onClick={() => console.log(this.props.state)} variant="contained">
          【開発用】Consoleにstate出力
        </Button>
      </TableFrame>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    // quizzes: getQuizzes(state),
    state,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  loadQuiz: (quizId) => {
    dispatch(loadQuiz(quizId));
  },
  loadQuizzes: (params) => {
    dispatch(loadQuizzes(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreenContainer);
