import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 240,
  },
});

function createData(event, scm, lcm) {
  return { event, scm, lcm };
}

const rows = [
  createData("50 free", "23.60", "23.90"),
  createData("100 free", "52.1", "54.0"),
  createData("50 breast", "28.60", "30.70"),
  createData("100 breast", "1:02.90", "1:07.50"),
  createData("200 breast", "2:18.0", "2:32.00"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{
        marginBottom: "20px",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 8px",
      }}
    >
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>EVENT</TableCell>
            <TableCell align="center">SCM</TableCell>
            <TableCell align="center">LCM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell key={row.name} component="th" scope="row">
                {row.event}
              </TableCell>
              <TableCell align="center">{row.scm}</TableCell>
              <TableCell align="center">{row.lcm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
