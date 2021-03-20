import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import React from "react";
import TableHeader from "./Header";
import StyledTableCell from "./StyledTableCell";
import StyledTableRow from "./StyledTableRow";

function createData(no, question, status, result) {
  return { no, question, status, result };
}

const rows = [
  createData(1, "問題1", "未回答", "-"),
  createData(2, "問題2", "未回答", "-"),
  createData(3, "問題3", "未回答", "-"),
  createData(4, "問題4", "未回答", "-"),
  createData(5, "問題5", "未回答", "-"),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeader />
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell align="right">{row.question}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.result}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
