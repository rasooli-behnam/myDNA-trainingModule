import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  ListItemIcon
} from "@material-ui/core";
import { Done } from "@material-ui/icons";

const styles = theme => ({
  root: {
    width: "99%",
    margin: "auto"
  },
  infoBox: {
    margin: "10px 0px",
    padding: "20px 0px",
    backgroundColor: "#fff4e8"
  }
});

function Benefits(props) {
  const { classes } = props;
  return (
    <Paper>
      <List component="nav">
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            Genetics can contribute to <b>overall health and wellness</b>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            Important genetic information may only be{" "}
            <b>uncovered through scientific testing and analysis</b>
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            <b>Everyone is different.</b> People can respond differently to
            diets
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            <b>Genes can affect someone's weight management</b> or other aspects
            of their health
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            A report with their personalised genetic findings and tailored
            recommendations <b>could help them reach their health goals</b>
          </Typography>
        </ListItem>
      </List>
      <Grid container className={classes.root} justify="center" spacing={16}>
        <Grid item xs={4}>
          <Paper className={classes.infoBox}>
            <Typography variant="h4" align="center">
              50%+
            </Typography>
            <Typography variant="subtitle2" align="center">
              are overweight or obese
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.infoBox}>
            <Typography variant="h4" align="center">
              $Billions
            </Typography>
            <Typography variant="subtitle2" align="center">
              weight loss industry globally
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.infoBox}>
            <Typography variant="h4" align="center">
              90%
            </Typography>
            <Typography variant="subtitle2" align="center">
              of diets fail
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(Benefits);
