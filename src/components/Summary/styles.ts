import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  summary: {
    height: 640,
    overflowY: 'scroll',
    marginBottom: 20, padding: 20,
    minHeight: 640
  }
}));
