import {Activity, ActivityRadioProps} from "./ActivityPicker";
import {ParamPicker} from "./ParamPicker";

export function LowActivity({checked = false, set}: ActivityRadioProps) {
    return <ParamPicker label={'Низкая'}
                        description={'Редкие, нерегулярные тренировки, активность в быту'}
                        id={'low'}
                        value={Activity.Low}
                        checked={checked}
                        set={set}/>
}
