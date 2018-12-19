import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const styles = {
  root: {
    padding: 5
  }
};

function IntroducingToCustomers(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/kY4N1U4_rNk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Paper>
  );
}

export default withStyles(styles)(IntroducingToCustomers);
