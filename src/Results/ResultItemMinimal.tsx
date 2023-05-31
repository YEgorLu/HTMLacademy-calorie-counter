import {ResultItem, ResultItemCaloriesProp} from "./ResultItem";

export function ResultItemMinimal({caloriesNorm}: ResultItemCaloriesProp) {
    return <ResultItem id={'minimal'}
                       caloriesNorm={caloriesNorm}
                       description={'снижение веса'} />
}
