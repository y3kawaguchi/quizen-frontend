import { ListItem as ListItemBase, withStyles } from "@material-ui/core";

export default withStyles({
  root: {
    "&$selected, &$selected:hover, &$selected:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderLeft: "5px solid #000",
    },
    marginTop: 20,
    marginBottom: 20,
    opacity: 1,
  },
  disabled: {},
  selected: {},
})(ListItemBase);
