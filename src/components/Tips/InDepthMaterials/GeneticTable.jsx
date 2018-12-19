import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";

const styles = theme => ({
  title: {
    margin: "20px 0"
  },
  tableHeadRow: {
    backgroundColor: "#a1bc47"
  },
  tableCell: {
    textAlign: "center"
  },
  tableHeadCell: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
});

function GeneticTable(props) {
  const { classes } = props;
  return (
    <Paper>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableHeadRow}>
            <TableCell colSpan={8} className={classes.tableCell}>
              <Typography className={classes.tableHeadCell}>
                DNA molecule
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCell}>
              <Typography>Allele 1</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>C</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>T</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>A</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>C</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>G</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>T</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>A</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.tableCell}>
              <Typography>Allele 2</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>C</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>T</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>A</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>T</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>G</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>T</Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography>A</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(GeneticTable);
