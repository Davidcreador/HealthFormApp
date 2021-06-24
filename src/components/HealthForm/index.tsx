import { useContext } from "react";
import { Form } from 'react-final-form';
import { Grid, Button, Paper, LinearProgress, CircularProgress, Box } from "@material-ui/core";

import { HealthFormProps, FormData } from '../../types';
import useStyles from "./styles";
import GeneralInfoForm from "../GeneralInfoForm";
import MedicalForm from "../MedicalForm";
import ConditionsForm from "../ConditionsForm";
import Terms from "../Terms";
import Summary from "../Summary";
import { AppContext } from "../../App";

// Function to simulate the latency from a real XHR call
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function HealthForm(props: HealthFormProps) {
  const classes = useStyles();
  // @ts-ignore
  const [state, dispatch] = useContext(AppContext);

  const { initialValues } = props;

  async function onSubmit(values: FormData) {
    await sleep(2000);

    // TODO: Implement a real API endpoint call and manage different states like failure|success|idle
    console.log(values);
  }

  const handleBackClick = () => {
    dispatch({
      type: "DECREMENT_STEP",
      payload: state.step - 1
    })
  }

  const handleNextClick = () => {
    dispatch({
      type: "INCREMENT_STEP",
      payload: state.step + 1
    })
  }

  function validate(values: FormData) {
    if (!values.firstName) {
      return { firstName: 'First Name is required.' };
    }

    if (!values.lastName) {
      return { lastName: 'Last Name is required.' };
    }
    return;
  }

  return (
    <>
      <Box width="100%" mr={1} mb={4}>
        <LinearProgress variant="determinate" value={state.step * 25} />
      </Box>
      <Paper>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          validate={validate}
          render={({ handleSubmit, values, submitting }) => (
            <form onSubmit={handleSubmit} noValidate className={classes.form}>
              <Grid container direction="column" alignContent="stretch" className={classes.formContainer}>

                {/* This can of course be more elaborate, due to time restrictions, I chose this implementation. */}
                {state.step === 0 && <GeneralInfoForm />}
                {state.step === 1 && <ConditionsForm />}
                {state.step === 2 && <MedicalForm />}
                {state.step === 3 && <Terms />}
                {state.step === 4 && <Summary values={values} />}

                <div className={classes.formButtons}>
                  <Button variant="contained" color="secondary" disabled={state.step === 0} onClick={handleBackClick}>
                    Back
                  </Button>
                  {state.step !== 4 && <Button variant="contained" color="primary" onClick={handleNextClick}>
                    Next
                  </Button>}
                  {state.step === 4 && <Button type="submit" variant="contained" color="primary" disabled={submitting}>
                    Submit
                  </Button>}
                </div>
              </Grid>

              {/* Loader to show the User something is happening. Good UX */}
              {submitting && <div className={classes.progressContainer}><CircularProgress /></div>}
            </form>
          )}
        />
      </Paper>
    </>
  );
}
