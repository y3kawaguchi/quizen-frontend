import { makeStyles } from "@material-ui/core/styles";
import Link from "./Link";

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.secondary.main,
  },
  linkLabel: {
    color: theme.palette.secondary.main,
    display: "inline",
  },
}));

export default () => {
  const classes = useStyles();
  return <Link classes={classes} />;
};
