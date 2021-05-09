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
        <StyledTableCell>TITLE</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
