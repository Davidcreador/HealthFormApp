import { TextField, Select, DatePicker } from 'mui-rff';
import { Grid, MenuItem, Typography } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';

import { useStyles } from "./styles";

const maritalStatusOptions = ['Married', 'Single', 'Divorced', 'Life Partner', 'Separated', 'Widowed', 'Other']

const formFields: JSX.Element[] = [
  <TextField name="firstName" label="First Name" type="text" />,
  <TextField name="lastName" label="Last Name" type="text" />,
  <TextField name="gender" label="Gender" type="text" />,
  <DatePicker
    label="Date of Birth"
    name="dateOfBirth"
    dateFunsUtils={DateFnsUtils}
    margin="normal"
    variant="inline"
    format="yyyy-MM-dd"
  />,
  <TextField name="email" label="Email" type="email" />,
  <TextField name="phoneNumber" label="Phone Number" type="number" />,
  <TextField name="streetAddress" label="Street Address" type="text" />,
  <TextField name="city" label="City" type="text" />,
  <TextField name="state" label="State" type="text" />,
  <TextField name="zip" label="Zip" type="text" />,
  <Select name="maritalStatus" label="Marital Status" formControlProps={{ margin: 'normal' }}>
    {maritalStatusOptions.map((opt, index) => (
      <MenuItem key={index} value={opt}>{opt}</MenuItem>
    ))}
  </Select>
];

export default function GeneralInfoForm() {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Typography variant="h4" component="h4" gutterBottom>
        General Information
      </Typography>
      {formFields.map((item, idx) => (
        <Grid item key={idx}>
          {item}
        </Grid>
      ))}
    </div>
  )
}
