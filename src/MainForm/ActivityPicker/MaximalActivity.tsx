import {Activity, ActivityRadioProps} from "./ActivityPicker";
import {ParamPicker} from "./ParamPicker";

export function MaximalActivity({checked = false, set}: ActivityRadioProps) {
    return <ParamPicker label={'Очень высокая'}
                        description={'Больше 6 тренировок в неделю и физическая работа'}
                        id={'maximal'}
                        value={Activity.Maximal}
                        checked={checked}
                        set={set}/>
}
