import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

const styles = theme => ({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16
  },
  box: {
    padding: "40px 20px",
    margin: "18px 0"
  }
});

function FAQs(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.box}>
        <Typography className={classes.title}>
          If I have a medical condition, food intolerance or allergy will this
          test be helpful?
        </Typography>
        <Typography>
          The genetic findings in the myDNA personalised diet report give you an
          insight into how your body may be pre-programmed when it comes to
          weight management and lipid levels. We don't currently test for food
          intolerances, allergies or medical conditions. Please note if you have
          any specific medical conditions, or are pregnant or breastfeeding it
          is recommended to discuss any plans for a new diet or exercise program
          with your health professional.
        </Typography>
      </Paper>
      <Paper className={classes.box}>
        <Typography className={classes.title}>Is it accurate?</Typography>
        <Typography>
          A strict quality assurance process combined with state of the art
          laboratory facilities, allows us to control reliability and validity
          of our tests. Our reports and findings are developed in accordance to
          internationally recognised guidelines and factor in a large number of
          published studies.
        </Typography>
      </Paper>
      <Paper className={classes.box}>
        <Typography className={classes.title}>
          Do the results have any implications for my life insurance?
        </Typography>
        <Typography>
          We do not test for disease risk or cancer genomics and have no plans
          to do so in the future. As a result our tests should not have
          relevance for life insurance policies
        </Typography>
      </Paper>
      <Paper className={classes.box}>
        <Typography className={classes.title}>
          Can children be tested?
        </Typography>
        <Typography>
          The current myDNA personalised diet report has genetic results and
          recommendations tailored for individuals over 18 years of age
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(FAQs);
