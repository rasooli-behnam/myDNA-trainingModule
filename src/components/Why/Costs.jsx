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
    margin: "20px 0"
  },
  tableHeadRow: {
    backgroundColor: "#a1bc47"
  },
  tableHeadCell: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  tablePriceCell: {
    fontSize: 20
  }
});

function Costs(props) {
  const { classes } = props;
  return (
    <Paper>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.tableHeadRow}>
            <TableCell>
              <Typography className={classes.tableHeadCell}>Image</Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.tableHeadCell}>Product</Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.tableHeadCell}>Price</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <img
                src="https://www.mydna.life/wp-content/uploads/Kit-and-Diet-Fitness-Report-600x600-150x150.png"
                height="100"
                width="100"
              />
            </TableCell>
            <TableCell>
              <Typography>
                myDNA Nutrition & Fitness Test Kit (Bundle - includes Caffeine)
              </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.tablePriceCell}>$99</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img
                src="https://www.mydna.life/wp-content/uploads/Medication-Kit-and-Single-Report-150x150.png"
                height="100"
                width="100"
              />
            </TableCell>
            <TableCell>
              <Typography>myDNA Medication Test Kit (Single)</Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.tablePriceCell}>$99</Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <img
                src="https://www.mydna.life/wp-content/uploads/Medication-HCP-Kit-and-Full-Report-150x150.png"
                height="100"
                width="100"
              />
            </TableCell>
            <TableCell>
              <Typography>myDNA Medication Test Kit (Multi)</Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.tablePriceCell}>$149</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(Costs);
