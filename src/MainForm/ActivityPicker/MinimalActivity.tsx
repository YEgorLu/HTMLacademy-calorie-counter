import {ParamPicker} from "./ParamPicker";
import {Activity, ActivityRadioProps} from "./ActivityPicker";


export function MinimalActivity({checked = false, set}: ActivityRadioProps) {
    return <ParamPicker label={'Минимальная'}
                        description={'Сидячая работа и нет физических нагрузок'}
                        id={'minimal'}
                        value={Activity.Minimal}
                        checked={checked}
                        set={set}
    />
}
