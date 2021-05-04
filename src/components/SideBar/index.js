import { Drawer, List, withStyles } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import ListItem from "./ListItem";

const styles = (theme) => ({
  drawer: {
    position: "relative",
    flexShrink: 0,
    backgroundColor: "#ADB5BD",
  },
});

const SideBar = (props) => {
  // const { classes, item, path, width = 152 } = props;
  const { classes, width = 152 } = props;
  const history = useHistory();
  const handleLink = (path) => history.push(path);

  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} style={{ width }} variant="permanent">
      <List>
        <ListItem
          label={"Top"}
          onClick={() => handleLink("/")}
          // selected={item === "Top"}
        />
        <ListItem
          label={"List"}
          onClick={() => handleLink("/list")}
          // selected={item === "List"}
        />
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(SideBar);
