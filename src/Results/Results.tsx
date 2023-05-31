import {ResultItemNorm} from "./ResultItemNorm";
import {ResultItemMinimal} from "./ResultItemMinimal";
import {ResultItemMaximal} from "./ResultItemMaximal";

type ResultsProps = {
    show: boolean,
    normKkl: string,
    minimalKkl: string,
    maximalKkl: string,
}

export function Results({
                            show,
                            normKkl,
                            minimalKkl,
                            maximalKkl
                        }: ResultsProps) {

    if (!show)
        return <></>;

    return (
        <section className="counter__result">
            <h2 className="heading">
                Ваша норма калорий
            </h2>
            <ul className="counter__result-list">
                <ResultItemNorm caloriesNorm={normKkl}/>

                <ResultItemMinimal caloriesNorm={minimalKkl}/>

                <ResultItemMaximal caloriesNorm={maximalKkl}/>
            </ul>
        </section>
    )
}
