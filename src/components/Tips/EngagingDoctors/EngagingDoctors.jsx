import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SampleContent from "./SampleContent";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function EngagingDoctors(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Why engage doctors?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            How to identify the right doctors to speak to:
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Organising to meet doctors
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            What if there is no response?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            What is the aim of visiting doctors?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Evidence based international recommendations for pharmacogenomics
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            What should you cover when when you visit the doctor
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Questions to ask a doctor to maximise engagement
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            How to handle doctor objections
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SampleContent />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(EngagingDoctors);
