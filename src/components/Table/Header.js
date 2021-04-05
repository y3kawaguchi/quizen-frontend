import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import StyledTableCell from "./StyledTableCell";

export default () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>ID</StyledTableCell>
        <StyledTableCell align="right">問題</StyledTableCell>
        <StyledTableCell align="right">ステータス</StyledTableCell>
        <StyledTableCell align="right">回答結果</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
