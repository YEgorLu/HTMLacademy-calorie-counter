import React, {useState} from 'react';
import {MainForm} from './MainForm/MainForm';
import {Results} from "./Results/Results";
import {Sex} from "./MainForm/SexPicker";
import {Activity} from "./MainForm/ActivityPicker/ActivityPicker";
import {resultsInitStates as states} from "./InitStates";
import {formulas} from "./Results/Kkl/formulas";
import {kklToString} from "./Results/Kkl/toString";


function App() {
    const [show, setShow] = useState<boolean>(states.showResults);

    const [normKkl, setNormKkl] = useState<string>(states.normKkl);
    const [minimalKkl, setMinimalKkl] = useState<string>(states.minimalKkl);
    const [maximalKkl, setMaximalKkl] = useState<string>(states.maximalKkl);

    const showResults = (sex: Sex, age: number,  height: number,
                         weight: number, activity: Activity) => {

        const normKkl = formulas.norm[sex](activity, weight, height, age);
        const minimalKkl = formulas.minimal[sex](activity, weight, height, age);
        const maximalKkl = formulas.maximal[sex](activity, weight, height, age);

        setNormKkl(kklToString(normKkl));
        setMinimalKkl(kklToString(minimalKkl));
        setMaximalKkl(kklToString(maximalKkl));

        setShow(true);
    }

    const hideResults = () => {
        setShow(false);
    }

    return (
        <main className='main'>
            <div className="container">
                <article className="counter">
                    <h1 className="counter__heading heading-main">
                        Счетчик калорий
                    </h1>

                    <MainForm showResults={showResults} hideResults={hideResults}/>

                    <Results show={show} normKkl={normKkl} minimalKkl={minimalKkl} maximalKkl={maximalKkl}/>

                </article>
            </div>
        </main>
    );
}

export default App;
