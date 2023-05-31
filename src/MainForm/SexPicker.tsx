import {Dispatch} from "react";

export enum Sex {
    Male = 'male',
    Female = 'female'
}

type SexPickerProps = {
    set: Dispatch<Sex>
}

export function SexPicker({set}: SexPickerProps) {
    return (
        <div className="form__item">
            <h2 className="heading">
                Пол
            </h2>
            <ul className="switcher">
                <li className="switcher__item">
                    <input id="gender-male" name="gender"
                           onInput={(ev) => set(ev.currentTarget.value as Sex)}
                           value={Sex.Male} type="radio" defaultChecked required/>
                    <label htmlFor="gender-male">
                        Мужчина
                    </label>
                </li>
                <li className="switcher__item">
                    <input id="gender-female" name="gender"
                           onInput={(ev) => set(ev.currentTarget.value as Sex)}
                           value={Sex.Female} type="radio" required/>
                    <label htmlFor="gender-female">
                        Женщина
                    </label>
                </li>
            </ul>
        </div>
    )
}

