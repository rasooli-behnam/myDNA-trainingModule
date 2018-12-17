import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import WhyDNATest from "../Why";
import WhoShouldGet from "../Who";
import HowToTest from "../DoTest";
import HowToReadTest from "../ReadTest";
import MoreTips from "../Tips";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    backgroundColor: "#029acc"
  }
});

class App extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Why DNA Test" />
            <Tab label="Who Should Get" />
            <Tab label="How To Test" />
            <Tab label="How To Use" />
            <Tab label="More Tips" />
          </Tabs>
        </AppBar>
        {value === 0 && <WhyDNATest />}
        {value === 1 && <WhoShouldGet />}
        {value === 2 && <HowToTest />}
        {value === 3 && <HowToReadTest />}
        {value === 4 && <MoreTips />}
      </div>
    );
  }
}

export default withStyles(styles)(App);
