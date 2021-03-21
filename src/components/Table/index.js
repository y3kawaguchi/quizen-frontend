import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import TableHeader from "./Header";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default (props) => {
  const { quizzes } = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeader />
        <TableBody>
          {quizzes.map((quize, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {quize.no}
              </StyledTableCell>
              <StyledTableCell align="right">{quize.question}</StyledTableCell>
              <StyledTableCell align="right">{quize.status}</StyledTableCell>
              <StyledTableCell align="right">{quize.result}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
