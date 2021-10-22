// for styling
import { makeStyles } from "@material-ui/core/styles";

// CSS in JS
// Returns an object having a prop named theme
// useStyles is a hook
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
}));

export default useStyles;
