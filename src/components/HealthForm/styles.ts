import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    textAlign: 'left',
    minHeight: 650,
    position: 'relative'
  },
  formContainer: {

  },
  formButtons: {
    padding: 20,
    backgroundColor: theme.palette.grey[200],
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  progressContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgb(255 255 255 / 68%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default useStyles;
