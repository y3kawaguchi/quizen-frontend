import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import ListScreen from "../components/ListScreen";
import { loadQuizzes } from "../redux/actions";

export class ListScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>一覧画面</div>
        <ListScreen />
        <Button onClick={() => this.props.loadQuizzes(1)} variant="contained">
          クイズを表示する
        </Button>
        <Button onClick={() => console.log(this.props.state)} variant="contained">
          consoleログからstateを確認する
        </Button>
      </div>
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
  loadQuizzes: (params) => {
    dispatch(loadQuizzes(params));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreenContainer);
