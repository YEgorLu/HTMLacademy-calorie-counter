import {Activity, ActivityRadioProps} from "./ActivityPicker";
import {ParamPicker} from "./ParamPicker";

export function MidActivity({checked = false, set}: ActivityRadioProps) {
    return <ParamPicker label={'Средняя'}
                        description={'Тренировки 3-5 раз в неделю'}
                        id={'medium'}
                        value={Activity.Medium}
                        checked={checked}
                        set={set}/>
}
