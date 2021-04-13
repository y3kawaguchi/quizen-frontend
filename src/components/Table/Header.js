import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import StyledTableCell from "./StyledTableCell";

export default () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>ID</StyledTableCell>
        {/* <StyledTableCell align="right">タイトル</StyledTableCell> */}
        <StyledTableCell>題名</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
