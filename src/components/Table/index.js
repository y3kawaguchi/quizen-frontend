import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import { replace } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import TableHeader from "./Header";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const QuizTable = (props) => {
  const { quizzes } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLink = (path) => {
    history.push(path);
    dispatch(replace(path));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeader />
        <TableBody>
          {quizzes.map((quiz, index) => (
            <StyledTableRow key={index} onClick={() => handleLink(`/details/${quiz.id}`)}>
              <StyledTableCell component="th" scope="row">
                {quiz.id}
              </StyledTableCell>
              <StyledTableCell>{quiz.title}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuizTable;
