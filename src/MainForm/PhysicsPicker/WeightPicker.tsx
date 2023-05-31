import {ParamPicker, ParamPickerStateProps} from "./ParamPicker";

export function WeightPicker({value, set}: ParamPickerStateProps) {
    return <ParamPicker
        label={'Вес'}
        unit={'кг'}
        id={'weight'}
        value={value}
        set={set}/>
}
