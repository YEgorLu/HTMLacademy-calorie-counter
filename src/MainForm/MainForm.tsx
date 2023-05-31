import {Sex, SexPicker} from "./SexPicker";
import {PhysicsPicker} from "./PhysicsPicker/PhysicsPicker";
import {Activity, ActivityPicker} from "./ActivityPicker/ActivityPicker";
import {CrossIcon} from "../icons/CrossIcon";
import {FormEvent, useEffect, useState} from "react";
import {initStates as states} from "../InitStates";

type MainFormProps = {
    showResults: (sex: Sex, age: number, height: number,
                  weight: number, activity: Activity) => void,
    hideResults: () => void
}

export function MainForm({showResults, hideResults}: MainFormProps) {
    const [sex, setSex] = useState<Sex>(states.sex);
    const [age, setAge] = useState<number>(states.age);
    const [height, setHeight] = useState<number>(states.height);
    const [weight, setWeight] = useState<number>(states.weight);
    const [activity, setActivity] = useState<Activity>(states.activity);

    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
    const [resetDisabled, setResetDisabled] = useState<boolean>(true);

    const checkDisable = () => {
        let needDisableReset = true;
        let needEnableSubmit = true;
        const init = [states.activity, states.sex, states.age, states.height, states.weight];
        [activity, sex, age, height, weight]
            .forEach((state, i) => {
                if (state !== init[i])
                    needDisableReset = false;
                else if (i > 1) {
                    needEnableSubmit = false
                }
            })

        setSubmitDisabled(!needEnableSubmit);
        setResetDisabled(needDisableReset);
    }

    useEffect(() => {
        checkDisable();
    }, [activity, sex, age, height, weight])

    const reset = () => {
        setSex(states.sex);
        setActivity(states.activity);
        setAge(states.age);
        setHeight(states.height);
        setWeight(states.weight);
        hideResults();
    }

    const submit = (ev: FormEvent) => {
        ev.preventDefault();
        showResults(sex, age, height, weight, activity);
    }

    return (
        <form className='counter__form form' name='counter'>
            <SexPicker set={setSex}/>

            <PhysicsPicker setAge={setAge} setHeight={setHeight} setWeight={setWeight}
                           age={age} weight={weight} height={height}/>

            <ActivityPicker set={setActivity}/>

            <div className="form__submit">
                <button className="form__submit-button button"
                        onClick={submit}
                        name="submit" type="submit" disabled={submitDisabled}>
                    Рассчитать
                </button>
                <button className="form__reset-button" name="reset" type="reset" disabled={resetDisabled}
                        onClick={reset}>
                    <CrossIcon/>
                    <span>
                        Очистить поля и расчёт
                    </span>
                </button>
            </div>
        </form>
    )
}
