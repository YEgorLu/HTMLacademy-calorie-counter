import {Dispatch} from "react";

type ParamPickerProps = {
    label: string,
    unit: string,
    id: string,
    name?: string,
    placeholder?: string,
    maxLength?: number
}

export type ParamPickerStateProps = {
    value: number,
    set: Dispatch<number>
}

export function ParamPicker({
                                label,
                                unit,
                                id,
                                name = id,
                                placeholder = '0',
                                maxLength = 3,
                                value,
                                set
                            }: ParamPickerProps & ParamPickerStateProps) {
    return (
        <div className="input">
            <div className="input__heading">
                <label className="heading" htmlFor="height">
                    {label}
                </label>
                <span className="input__heading-unit">
                    {unit}
                  </span>
            </div>
            <div className="input__wrapper">
                <input type="text" id={id} name={name} value={value}
                       onChange={(ev) => set(+ev.currentTarget.value)}
                       placeholder={placeholder} inputMode="decimal"
                       maxLength={maxLength}
                       required/>
            </div>
        </div>
    )
}
