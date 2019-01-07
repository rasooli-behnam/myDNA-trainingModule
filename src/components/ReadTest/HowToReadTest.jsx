import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Paper,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  panel: {
    backgroundColor: "#aee7f9"
  },
  details: {
    padding: "40px 20px"
  },
  paragraph: {
    margin: "20px 0px"
  }
});

function HowToReadTest(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Overview</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Paper className={classes.details}>
            <Typography className={classes.paragraph}>
              This report provides clinically relevant information on what the
              patient’s genetic results predict about their response to a number
              of medications covered by this report.
            </Typography>
            <Typography className={classes.paragraph}>
              The information concerns drug metabolism and plasma concentrations
              (drug exposure), as well as the potential for altered clinical
              effects.
            </Typography>
            <Typography className={classes.paragraph}>
              Based on the available information found in the published
              literature, each medication has been assigned a category according
              to the likely clinical significance of each gene-drug interaction.
            </Typography>
            <Typography className={classes.paragraph}>
              The three categories are:
              <br />
               Major – significant result that may require altering this
              medication
              <br />
               Minor – result should be considered as may affect medication
              response
              <br /> Usual – usual prescribing considerations apply
            </Typography>
            <Typography className={classes.paragraph}>
              For many medications covered in this report, international, peer
              reviewed prescribing guidelines are available and these are
              included in our report.
            </Typography>
            <Typography className={classes.paragraph}>
              The two major guidelines are those of the Clinical
              Pharmacogenetics Implementation Consortium (CPIC) and the Royal
              Dutch Pharmacists Association – Pharmacogenetics Working Group
              (DPWG).
            </Typography>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Report Breakdown</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Paper className={classes.details}>
            <Typography className={classes.paragraph}>
              The report consists of the following sections:
            </Typography>
            <Typography className={classes.paragraph}>
              <ul>
                <li>
                  Report Summary – identifies which of the patient’s listed
                  medications have pharmacogenomic information relevant to the
                  genes tested, with an indication of the clinical importance of
                  this information (i.e. “Major”, “Minor” or “Usual” prescribing
                  considerations).
                </li>
                <li>
                  Genetic Test Results Overview – genotype result for the nine
                  gene test (i.e. six genes encoding CYP450 metabolising enzymes
                  relevant to a large number of medications, VKORC1 which
                  relates to warfarin sensitivity, SLCO1B1 which relates to
                  statin induced myopathy and OPRM1 which relates to morphine
                  sensitivity).
                </li>
                <li>
                  Current Medications – details of the interaction between the
                  patient’s genetic results and their medication, based on the
                  current scientific literature, as well as clinical
                  recommendations, many sourced from peerreviewed, published
                  guidelines.
                </li>
                <li>
                  Potential Drug Interactions – identifies which of the
                  patient’s listed medications can significantly inhibit or
                  induce CYP enzymes, as they may modify the genotype-predicted
                  enzyme function.
                </li>
                <li>
                  Future Medications – lists medications that the patient is not
                  currently taking that have potentially clinically significant
                  prescribing considerations based on the patient’s genetic test
                  results (also classified as having “Major”, “Minor” or “Usual”
                  prescribing considerations).
                </li>
              </ul>
            </Typography>
            <Typography className={classes.paragraph}>
              As part of our clinical service, we have a team of clinical
              experts available to answer any questions you may have about this
              report or about pharmacogenomics in general.
            </Typography>
            <Typography className={classes.paragraph}>
              If you have any such queries, please call our clinical team on
              1300 436 373.
            </Typography>
          </Paper>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(HowToReadTest);
