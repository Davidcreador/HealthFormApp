import { cleanup, render, fireEvent, screen } from '@testing-library/react';
import HealthForm from '../../components/HealthForm';

const initialValues = {
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
};

afterEach(cleanup);

it("renders", async () => {
  const { getByText } = render(<HealthForm initialValues={initialValues} />);

  expect(getByText('General Information')).toBeInTheDocument();

  const incrementButton = screen.getByText("Next")
  // const decrementButton = screen.getByText("Back")

  fireEvent.click(incrementButton);
  expect(getByText('Conditions')).toBeInTheDocument()

  fireEvent.click(incrementButton);
  expect(getByText('Medical Questions')).toBeInTheDocument()

  fireEvent.click(incrementButton);
  expect(getByText('Terms')).toBeInTheDocument()

  fireEvent.click(incrementButton);
  expect(getByText('Summary')).toBeInTheDocument()
})
