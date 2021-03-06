import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import PotentialCustomers from "./PotentialCustomers";
import Introducing from "./Introducing";

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

function WhoShouldGet(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Potential Customers
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <PotentialCustomers />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            Introducing To Customers
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Introducing />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default withStyles(styles)(WhoShouldGet);
