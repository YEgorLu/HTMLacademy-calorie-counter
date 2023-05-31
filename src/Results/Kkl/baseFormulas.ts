import {Sex} from "../../MainForm/SexPicker";

type KklFormula = (weight: number, height: number, age: number) => number

const formula = (weight: number, height: number, age: number) => {
    return (10 * weight) + (6.25 * height) - (5 * age);
}

const maleFormula: KklFormula = (weight: number, height: number, age: number) => {
    return formula(weight, height, age) + 5;
}

const femaleFormula: KklFormula = (weight: number, height: number, age: number) => {
    return formula(weight, height, age) - 161;
}

type BaseFormulas = Record<Sex, KklFormula>

export const baseFormulas: BaseFormulas = {
    [Sex.Male]: maleFormula,
    [Sex.Female]: femaleFormula,
} as const
