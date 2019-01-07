import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import EngagingDoctors from "./EngagingDoctors";
import IdentifyingCustomers from "./IdentifyingCustomers";
import InDepthMaterials from "./InDepthMaterials";
import FAQs from "./FAQs";

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
  }
});

function MoreTips(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Engaging More Doctors
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <EngagingDoctors />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Identifying Customer
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>
              Identify patient and discuss the test with them. A potential
              customer can be one of the following:
            </Typography>
            <br />
            <IdentifyingCustomers />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            In-depth Materials
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <InDepthMaterials />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>FAQs</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <FAQs />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(MoreTips);
