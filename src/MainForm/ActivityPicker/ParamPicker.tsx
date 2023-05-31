import {Activity} from "./ActivityPicker";
import {Dispatch} from "react";

type ActivityPicker = {
    label: string,
    description: string,
    id: string,
    value: Activity,
    checked: boolean,
    set: Dispatch<Activity>
}

export function ParamPicker({
                                label,
                                description,
                                id,
                                value,
                                checked,
                                set
                            }: ActivityPicker) {

    const _id = `activity-${id}`;
    return (
        <>
            <div className="radio__wrapper">
                <input id={_id} name="activity" onInput={(ev) => set(ev.currentTarget.value as Activity)} value={value}
                       type="radio" defaultChecked={checked} required/>
                <label htmlFor={_id}>
                    {label}
                </label>
            </div>
            <p className="radio__description">
                {description}
            </p>
        </>
    )
}
