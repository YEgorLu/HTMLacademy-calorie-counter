import {Activity, ActivityRadioProps} from "./ActivityPicker";
import {ParamPicker} from "./ParamPicker";

export function HighActivity({checked = false, set}: ActivityRadioProps) {
    return <ParamPicker label={'Высокая'}
                        description={'Тренировки 6-7 раз в неделю'}
                        id={'high'}
                        value={Activity.High}
                        checked={checked}
                        set={set}/>
}
