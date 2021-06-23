import { Select } from 'mui-rff';
import { Grid, MenuItem, Typography, FormControl, Input, Chip } from "@material-ui/core";
import { useStyles } from './styles';
import { cardiovascularConditionsType, gastrointestinalConditionsType, psychologicalConditionsType, otherConditionsType } from "../../types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const cardiovascularConditions: cardiovascularConditionsType = ['High blood pressure', 'Cardiac Arrest', 'Arrhythmia', 'Coronary heart disease'];
const gastrointestinalConditions: gastrointestinalConditionsType = ['IBS', 'Crohn\'s Disease', 'Gallstones'];
const psychologicalConditions: psychologicalConditionsType = ['Depression', 'Anxiety', 'Stress', 'Insomnia'];
const otherConditions: otherConditionsType = ['Cancer', 'Diabetes', 'Stress', 'Insomnia'];

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function ConditionsForm() {
  const classes = useStyles();

  const formFields: JSX.Element[] = [
    <FormControl className={classes.formControl}>
      <Select
        name="cardiovascularConditions"
        label="Cardiovascular Conditions"
        labelId="cardiovascularConditions-label"
        multiple
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected: any) => (
          <div className={classes.chips}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {cardiovascularConditions.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>,
    <FormControl className={classes.formControl}>
      <Select
        name="gastrointestinalConditions"
        label="Gastrointestinal Conditions"
        labelId="gastrointestinalConditions-label"
        multiple
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected: any) => (
          <div className={classes.chips}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {gastrointestinalConditions.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>,
    <FormControl className={classes.formControl}>
      <Select
        name="psychologicalConditions"
        label="Psychological Conditions"
        labelId="psychologicalConditions-label"
        multiple
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected: any) => (
          <div className={classes.chips}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {psychologicalConditions.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>,
    <FormControl className={classes.formControl}>
      <Select
        name="otherConditions"
        label="Other Conditions"
        labelId="otherConditions-label"
        multiple
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected: any) => (
          <div className={classes.chips}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {otherConditions.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>,
  ];

  return (
    <div className={classes.formContainer}>
      <Typography variant="h4" component="h4" gutterBottom>
        Conditions
      </Typography>
      {formFields.map((item, idx) => (
        <Grid item key={idx}>
          {item}
        </Grid>
      ))}
    </div>
  )
}
