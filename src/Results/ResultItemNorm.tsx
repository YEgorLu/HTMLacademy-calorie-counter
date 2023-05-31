import {ResultItem, ResultItemCaloriesProp} from "./ResultItem";

export function ResultItemNorm({caloriesNorm}: ResultItemCaloriesProp) {
    return <ResultItem id={'norm'}
                       caloriesNorm={caloriesNorm}
                       description={'поддержание веса'} />
}
