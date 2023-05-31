import {Sex} from "./MainForm/SexPicker";
import {Activity} from "./MainForm/ActivityPicker/ActivityPicker";

export const initStates = {
    sex: Sex.Male,
    age: 0,
    height: 0,
    weight: 0,
    activity: Activity.Minimal
} as const;

export const resultsInitStates = {
    showResults: false,
    normKkl: '0',
    minimalKkl: '0',
    maximalKkl: '0'
} as const;
