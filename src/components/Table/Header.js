import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import StyledTableCell from "./StyledTableCell";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>ID</StyledTableCell>
        <StyledTableCell>Title</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
