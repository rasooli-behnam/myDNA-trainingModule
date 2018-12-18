import React from "react";
import { List, ListItem, Typography, ListItemIcon } from "@material-ui/core";
import { Done } from "@material-ui/icons";

function DNAReport(props) {
  return (
    <List component="nav">
      <ListItem>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
        <Typography>
          <b>Provides nutrition and lifestyle recommendations</b> based on an
          individuals genes
        </Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
        <Typography>
          <b>Gives customers insight</b> into how their body is pre - programmed
          for weight management
        </Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
        <Typography>
          All recommendations are <b>backed up by scientific research</b>
        </Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
        <Typography>
          All diet recommendations are{" "}
          <b>within the Australia Dietary Guidelines</b>
        </Typography>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Done />
        </ListItemIcon>
        <Typography>
          People change, but genetics don't.{" "}
          <b>One - off test that customers can utilise for life</b>
        </Typography>
      </ListItem>
    </List>
  );
}

export default DNAReport;
