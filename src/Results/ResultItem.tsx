type ResultItemProps = {
    id: string,
    description: string,
} & ResultItemCaloriesProp

export type ResultItemCaloriesProp = {
    caloriesNorm: string
}

export function ResultItem({
                               id,
                               caloriesNorm,
                               description
                           }: ResultItemProps) {

    return (
        <li className="counter__result-item">
            <h3>
                <span id={`calories-${id}`}>{caloriesNorm}</span> ккал
            </h3>
            <p>
                {description}
            </p>
        </li>
    )
}
