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
  root: {
    width: "100%",
    overflowX: "auto"
  },
  title: {
    margin: "20px 0",
    padding: "20px 20px 10px"
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
  },
  tableGeneCellTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  tableGeneCellDescription: {
    fontSize: 11
  },
  tableInfluenceCellDescription: {
    fontSize: 12
  }
});

function makeTable(classes, data) {
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.tableHeadRow}>
          <TableCell className={classes.tableCell}>
            <Typography className={classes.tableHeadCell}>
              {data.columnTitles.first}
            </Typography>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <Typography className={classes.tableHeadCell}>
              {data.columnTitles.second}
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.genotypes.map(g => (
          <TableRow>
            <TableCell className={classes.tableCell}>
              <Typography className={classes.tableGeneCellTitle}>
                {g.name}
              </Typography>
              <Typography className={classes.tableGeneCellDescription}>
                {g.shortDesc}
              </Typography>
            </TableCell>
            <TableCell className={classes.tableCell}>
              <Typography className={classes.tableInfluenceCellDescription}>
                {g.description}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ReportTable(props) {
  const { classes, data } = props;
  return (
    <div>
      <Typography variant="h6" className={classes.title}>
        {data.tableTitle}
      </Typography>
      <Paper>{makeTable(classes, data)}</Paper>
    </div>
  );
}

export default withStyles(styles)(ReportTable);
