import {MinimalActivity} from "./MinimalActivity";
import {LowActivity} from "./LowActivity";
import {MidActivity} from "./MidActivity";
import {HighActivity} from "./HighActivity";
import {MaximalActivity} from "./MaximalActivity";
import {Dispatch} from "react";

export type ActivityRadioProps = {
    checked?: boolean
    set: Dispatch<Activity>
}

type ActivityPickerProps = {
    set: Dispatch<Activity>
}

export function ActivityPicker({set}: ActivityPickerProps) {
    return (
        <fieldset className="form__item">
            <legend className="heading">
                Физическая активность
            </legend>
            <ul className="radios-group">
                <li className="radio">
                    <MinimalActivity set={set} checked/>
                </li>
                <li className="radio">
                    <LowActivity set={set}/>
                </li>
                <li className="radio">
                    <MidActivity set={set}/>
                </li>
                <li className="radio">
                    <HighActivity set={set}/>
                </li>
                <li className="radio">
                    <MaximalActivity set={set}/>
                </li>
            </ul>
        </fieldset>
    )
}


export enum Activity {
    Minimal = 'min',
    Low = 'low',
    Medium = 'medium',
    High = 'high',
    Maximal = 'max'
}
