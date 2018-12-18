import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import {
  ExpandMore,
  Colorize,
  HowToReg,
  Mail,
  Assignment
} from "@material-ui/icons";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Colorize />
          <Typography className={classes.heading}>&nbsp; Swab</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Swab the inside of their cheek</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <HowToReg />
          <Typography className={classes.heading}>&nbsp; Register</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Register the kit online with the unique barcode
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Mail />
          <Typography className={classes.heading}>&nbsp; Send</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Send the kit using the provided reply paid envelope
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Assignment />
          <Typography className={classes.heading}>&nbsp; Result</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            If result delivery preference is direct to patient, they will have a
            phone consultation with the myDNA genetic counselling service and
            following this will be able to access their report on their private
            myDNA Explore portal.
            <br />
            <br />
            If result delivery preference is the health care professional, you
            will receive an email notification and results can be accessed on
            your secure myDNA portal via "Patient Search". Once the result has
            been discussed with the patient click the "delivered Result" button,
            to enable the patient to view it on their personal explore portal.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(SimpleExpansionPanel);
