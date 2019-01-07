import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
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
  paper: {
    backgroundColor: "#fff4e8"
  }
});

function SampleContent(props) {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <List component="nav">
        <ListItem>
          <Typography>
            Take a myDNA test kit, doctor education materials and doctor
            registration form:
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>Discuss an example report</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>Offer supporting evidence</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            Discuss how it works in pharmacy, including nomination of a doctor
            to receive the report
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>Identify patients that may benefit</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>Develop a protocol for their patients</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            Offer promotional test to nominated patient(s) and/or for the doctor
          </Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Done />
          </ListItemIcon>
          <Typography>
            Agree next steps and schedule follow-up meeting in 8 weeks time to
            discuss clinical outcomes and seek feedback
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            <b>Call to action:</b> suggest the doctor fill in and sign the
            health professional registration form to confirm preferred method of
            receiving results
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
}

export default withStyles(styles)(SampleContent);
