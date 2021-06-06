import React from "react";
import ListItemBase from "./ListItemBase";
import ListItemText from "./ListItemText";

const SideBarListItem = (props) => {
  // const { disabled = false, label, onClick = () => {}, selected } = props;
  const { disabled = false, label, onClick = () => {}, selected = false } = props;
  return (
    <ListItemBase button selected={selected} onClick={onClick}>
      <ListItemText disabled={disabled} label={label} selected={selected} />
    </ListItemBase>
  );
};

export default SideBarListItem;
