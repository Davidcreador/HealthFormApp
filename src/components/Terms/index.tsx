import { Switches } from 'mui-rff';
import { Typography } from "@material-ui/core";
import { useStyles } from './styles';

export default function Terms() {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Typography variant="h4" component="h4" gutterBottom>
        Terms
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.
      </Typography>
      <Switches
        name="termsAccept"
        required={true}
        data={{ label: 'I agree to the terms of service', value: true }}
      />
    </div>
  )
}
