import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import StyledTableCell from "./StyledTableCell";

export default function TableHeader() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>列1</StyledTableCell>
        <StyledTableCell align="right">列2</StyledTableCell>
        <StyledTableCell align="right">列3</StyledTableCell>
        <StyledTableCell align="right">列4</StyledTableCell>
        <StyledTableCell align="right">列5</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
