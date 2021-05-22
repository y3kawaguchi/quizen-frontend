import { Drawer, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { push } from "connected-react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ListItem from "./ListItem";

const useStyles = makeStyles(() => ({
  drawer: {
    position: "relative",
    flexShrink: 0,
    backgroundColor: "#ADB5BD",
  },
}));

export default (props) => {
  const classes = useStyles();
  const { width = 140 } = props;
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
        <ListItem
          label={"register"}
          onClick={() => handleLink("/register")}
          selected={item === "register"}
        />
      </List>
    </Drawer>
  );
};
