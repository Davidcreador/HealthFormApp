import React, { useReducer } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Components
import HealthForm from "./components/HealthForm";

// TODO: Place in a seperate file for consistency and maintenance
const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f9f9f9',
    height: '100vh',
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  }
}));

const initialState: any = {
  step: 0,
};

export const AppContext = React.createContext(initialState);

const reducer = (state: { step: number; }, action: { type: any; }) => {
  switch (action.type) {
    case "INCREMENT_STEP":
      return {
        step: state.step + 1
      };
    case "DECREMENT_STEP":
      return {
        step: state.step - 1
      };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className={classes.root}>
        <Container maxWidth="md">
          <HealthForm initialValues={{
            firstName: '',
            lastName: '',
            gender: '',
            dateOfBirth: '',
            email: '',
            phoneNumber: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            maritalStatus: '',
            doYouSmoke: '',
            doYouDrink: '',
            illicitDrugs: '',
            currentMeds: '',
            alergiesOrReactions: '',
            surgeriesOrHospital: '',
            cardiovascularConditions: [],
            gastrointestinalConditions: [],
            psychologicalConditions: [],
            otherConditions: [],
            termsAccept: false
          }} />
        </Container>
      </div>
    </AppContext.Provider>
  );
}

export default App;
