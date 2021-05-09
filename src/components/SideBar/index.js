import { Drawer, List, withStyles } from "@material-ui/core";
import { push } from "connected-react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const { classes, width = 160 } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLink = (path) => {
    history.push(path);
    dispatch(push(path));
  };
  const item = useSelector((state) => state.quizen.sideBarItem);

  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} style={{ width }} variant="permanent">
      <List>
        <ListItem label={"top"} onClick={() => handleLink("/")} selected={item === "top"} />
        <ListItem label={"list"} onClick={() => handleLink("/list")} selected={item === "list"} />
      </List>
    </Drawer>
  );
};

export default withStyles(styles)(SideBar);
