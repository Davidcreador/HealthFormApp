export type cardiovascularConditionsType = string[];
export type gastrointestinalConditionsType = string[];
export type psychologicalConditionsType = string[];
export type otherConditionsType = string[];

export interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
  maritalStatus: string;
  doYouSmoke: string,
  doYouDrink: string,
  illicitDrugs: string,
  currentMeds: string,
  alergiesOrReactions: string,
  surgeriesOrHospital: string,
  cardiovascularConditions: string[],
  gastrointestinalConditions: string[],
  psychologicalConditions: string[],
  otherConditions: string[]
  termsAccept: boolean
}

export interface IConditions {
  cardiovascular: { conditions: cardiovascularConditionsType; }
  gastrointestinal: { condition: gastrointestinalConditionsType; }
  psychological: { condition: psychologicalConditionsType; }
  other: { condition: otherConditionsType; }
}

export interface HealthFormProps {
  initialValues: FormData;
}

// [{
//   "type": "cardiovascular",
//   "condition": "High blood pressure"
// }, {
//   "type": "cardiovascular",
//   "condition": "Cardiac Arrest"
// }, {
//   "type": "cardiovascular",
//   "condition": "Arrhythmia"
// }, {
//   "type": "cardiovascular",
//   "condition": "Coronary heart disease"
// }, {
//   "type": "gastrointestinal",
//   "condition": "IBS"
// }, {
//   "type": "gastrointestinal",
//   "condition": "Crohn's Disease"
// }, {
//   "type": "gastrointestinal",
//   "condition": "Gallstones"
// }, {
//   "type": "psychological",
//   "condition": "Depression"
// }, {
//   "type": "psychological",
//   "condition": "Anxiety"
// }, {
//   "type": "psychological",
//   "condition": "Stress"
// }, {
//   "type": "psychological",
//   "condition": "Insomnia"
// }, {
//   "type": "other",
//   "condition": "Cancer"
// }, {
//   "type": "other",
//   "condition": "Diabetes"
// }]
