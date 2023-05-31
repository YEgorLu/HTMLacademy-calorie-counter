import {Activity} from "../../MainForm/ActivityPicker/ActivityPicker";
import {Sex} from "../../MainForm/SexPicker";
import {baseFormulas} from "./baseFormulas";
import {activityCoefs} from "./activityCoefs";

type Formula = (activity: Activity, weight: number, height: number, age: number) => number;

const normMaleFormula: Formula = (activity: Activity, weight: number, height: number, age: number) => baseFormulas.male(weight,height,age) * activityCoefs[activity];
const normFemaleFormula: Formula = (activity: Activity, weight: number, height: number, age: number) => baseFormulas.female(weight,height,age) * activityCoefs[activity];

const minimalMaleFormula: Formula = (activity: Activity, weight: number, height: number, age: number) => normMaleFormula(activity, weight, height, age) * 0.85;
const minimalFemaleFormula: Formula = (activity: Activity, weight: number, height: number, age: number) => normFemaleFormula(activity, weight, height, age) * 0.85;

const maximalMaleFormula: Formula = (activity: Activity, weight: number, height: number, age: number) => normMaleFormula(activity, weight, height, age) * 1.15;
const maximalFemaleFormula: Formula = (activity: Activity, weight: number, height: number, age: number) => normFemaleFormula(activity, weight, height, age) * 1.15;

type FormulasBySex = Record<Sex, Formula>;

type Formulas = {
    norm: FormulasBySex,
    minimal: FormulasBySex,
    maximal: FormulasBySex
};

export const formulas: Formulas = {
    norm: {
        [Sex.Male]: normMaleFormula,
        [Sex.Female]: normFemaleFormula
    },
    minimal: {
        [Sex.Male]: minimalMaleFormula,
        [Sex.Female]: minimalFemaleFormula
    },
    maximal: {
        [Sex.Male]: maximalMaleFormula,
        [Sex.Female]: maximalFemaleFormula,
    }
} as const;
