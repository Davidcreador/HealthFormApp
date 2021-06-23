import { render, act } from '@testing-library/react';
import Summary from '../../components/Summary';

const values = {
  "firstName": "Dave",
  "lastName": "Pastor",
  "gender": "Male",
  "dateOfBirth": "",
  "email": "davidcreador@gmail.com",
  "phoneNumber": "1212121212",
  "streetAddress": "Boston",
  "city": "Boston",
  "state": "MA",
  "zip": "02111",
  "maritalStatus": "",
  "doYouSmoke": "",
  "doYouDrink": "",
  "illicitDrugs": "",
  "currentMeds": "",
  "alergiesOrReactions": "",
  "surgeriesOrHospital": "",
  "cardiovascularConditions": ['High blood pressure', 'Cardiac Arrest'],
  "gastrointestinalConditions": [],
  "psychologicalConditions": [],
  "otherConditions": [],
  "termsAccept": false
}


it("renders", () => {
  act(() => {
    render(<Summary values={values} />);
  });
})

