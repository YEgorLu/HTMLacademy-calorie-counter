import {ParamPicker, ParamPickerStateProps} from "./ParamPicker";


export function AgePicker({value, set}: ParamPickerStateProps) {
    return <ParamPicker label={'Возраст'}
                        unit={'лет'}
                        id={'age'}
                        value={value}
                        set={set}/>
}
