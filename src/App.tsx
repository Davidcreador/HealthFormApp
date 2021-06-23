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

function App() {
  const classes = useStyles();

  return (
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
  );
}

export default App;
