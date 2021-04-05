import { withStyles } from "@material-ui/core";
import Link from "./Link";

const styles = (theme) => ({
  link: {
    color: theme.palette.secondary.main,
  },
  linkLabel: {
    color: theme.palette.secondary.main,
    display: "inline",
  },
});

export default withStyles(styles)(Link);
