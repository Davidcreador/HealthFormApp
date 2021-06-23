import { TextField } from 'mui-rff';
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from './styles';

// All of this questions can be loaded from a server
// but I chose this option for simplicity since the amount of questions is small
const formFields: JSX.Element[] = [
  <TextField name="doYouSmoke" label="Do you smoke any tobacco products?" placeholder="How much and how often?" type="text" />,
  <TextField name="doYouDrink" label="Do you drink alcohol?" placeholder="How much and how often?" type="text" />,
  <TextField name="illicitDrugs" label="Have you regularly used illicit drugs?" placeholder="How much and how often?" type="text" />,
  <TextField name="currentMeds" label="Current medications" placeholder="Please list any medications you are currently taking including non-prescription medications, vitamins and supplements." type="text" />,
  <TextField name="alergiesOrReactions" label="Medication allergies or reactions" placeholder="Please list any medication allergies or reactions" type="text" />,
  <TextField name="surgeriesOrHospital" label="List any surgeries or hospital stays you have had and their approximate date / year" placeholder="Type of surgery or reason for hospitalization" type="text" />
];

export default function MedicalForm() {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Typography variant="h4" component="h4" gutterBottom>
        Medical Questions
      </Typography>
      {formFields.map((item, idx) => (
        <Grid item key={idx}>
          {item}
        </Grid>
      ))}
    </div>
  )
}
