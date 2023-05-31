import {ParamPicker, ParamPickerStateProps} from "./ParamPicker";

export function HeightPicker({value, set}: ParamPickerStateProps) {
    return <ParamPicker label={'Рост'}
                        unit={'см'}
                        id={'height'}
                        value={value}
                        set={set}/>
}
