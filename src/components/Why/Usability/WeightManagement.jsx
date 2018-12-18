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
  tableSubheadRow: {
    backgroundColor: "#bece8a"
  },
  tableCell: {
    textAlign: "center"
  },
  tableHeadCell: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  tableSubheadCell: {
    fontSize: 14,
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

function WeightManagement(props) {
  const { classes } = props;
  return (
    <div>
      <Typography className={classes.title}>
        Seven genes which may provide important information for an individual's:
        <br />
        - Weight management
        <br />- Lipid profile
      </Typography>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.tableHeadRow}>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableHeadCell}>Gene</Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableHeadCell}>
                  Influence
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableSubheadRow}>
              <TableCell colSpan={2} className={classes.tableCell}>
                <Typography className={classes.tableSubheadCell}>
                  Weight management
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableGeneCellTitle}>
                  FTO
                </Typography>
                <Typography className={classes.tableGeneCellDescription}>
                  Fat mass and Obesity associated protein
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableInfluenceCellDescription}>
                  Body size (BMI) and potential for weight regain after a diet
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableGeneCellTitle}>
                  MTIF3
                </Typography>
                <Typography className={classes.tableGeneCellDescription}>
                  Mitochondrial Translational Initiation Factor-3
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableInfluenceCellDescription}>
                  Body size (BMI) and potential for weight regain after a diet
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableGeneCellTitle}>
                  PPARG
                </Typography>
                <Typography className={classes.tableGeneCellDescription}>
                  Peroxisome proliferator-activated receptor
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableInfluenceCellDescription}>
                  Fat storage tendency
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableGeneCellTitle}>
                  ADIPOQ
                </Typography>
                <Typography className={classes.tableGeneCellDescription}>
                  Adiponectin
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableInfluenceCellDescription}>
                  Fat burning ability and weight
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <br />
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.tableHeadRow}>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableHeadCell}>Gene</Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableHeadCell}>
                  Influence
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow className={classes.tableSubheadRow}>
              <TableCell colSpan={2} className={classes.tableCell}>
                <Typography className={classes.tableSubheadCell}>
                  Lipid profile
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody stripedRows>
            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableGeneCellTitle}>
                  APOA5
                </Typography>
                <Typography className={classes.tableGeneCellDescription}>
                  Apolipoprotein A5
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableInfluenceCellDescription}>
                  Triglyceride levels
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableGeneCellTitle}>
                  LIPC
                </Typography>
                <Typography className={classes.tableGeneCellDescription}>
                  Lipase C hepatic type
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableInfluenceCellDescription}>
                  Triglyceride and cholesterol levels
                </Typography>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableGeneCellTitle}>
                  FADS1
                </Typography>
                <Typography className={classes.tableGeneCellDescription}>
                  Fatty Acid Desaturase 1
                </Typography>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Typography className={classes.tableInfluenceCellDescription}>
                  Omega-3 and omega-6 balance and lipid profile
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(WeightManagement);
