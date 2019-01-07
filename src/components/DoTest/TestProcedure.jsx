import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import HowTo_1 from "/src/Media/HowTo_1.PNG";
import HowTo_2 from "/src/Media/HowTo_2.PNG";

const styles = theme => ({
  root: {
    width: "100%"
  },
  images: {
    margin: "auto"
  },
  typography: {
    padding: 20
  }
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <div className={classes.images}>
        <img src={HowTo_1} alt="" />
        <img src={HowTo_2} alt="" />
      </div>
      <Typography className={classes.typography} variant="h6">
        Result:
      </Typography>
      <Typography className={classes.typography}>
        If result delivery preference is direct to patient, they will have a
        phone consultation with the myDNA genetic counselling service and
        following this will be able to access their report on their private
        myDNA Explore portal.
        <br />
        <br />
        If result delivery preference is the health care professional, you will
        receive an email notification and results can be accessed on your secure
        myDNA portal via "Patient Search". Once the result has been discussed
        with the patient click the "delivered Result" button, to enable the
        patient to view it on their personal explore portal.
      </Typography>
    </Paper>
  );
}

export default withStyles(styles)(SimpleExpansionPanel);
