import {ResultItem, ResultItemCaloriesProp} from "./ResultItem";

export function ResultItemMaximal({caloriesNorm}: ResultItemCaloriesProp) {
    return <ResultItem id={'maximal'}
                       caloriesNorm={caloriesNorm}
                       description={'набор веса'}/>
}
