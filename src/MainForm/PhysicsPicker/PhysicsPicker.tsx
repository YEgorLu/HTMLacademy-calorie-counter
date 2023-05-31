import {AgePicker} from "./AgePicker";
import {HeightPicker} from "./HeightPicker";
import {WeightPicker} from "./WeightPicker";
import {Dispatch} from "react";

type PhysicsPickerProps = {
    age: number,
    setAge: Dispatch<number>,
    height: number,
    setHeight: Dispatch<number>,
    weight: number,
    setWeight: Dispatch<number>,
}

export function PhysicsPicker({
                                  setAge, setHeight, setWeight,
                                  age, height, weight
                              }: PhysicsPickerProps) {
    return (
        <fieldset className="form__item form__parameters" name="parameters">
            <legend className="visually-hidden">
                Физические параметры
            </legend>
            <div className="inputs-group">
                <AgePicker set={setAge} value={age}/>

                <HeightPicker set={setHeight} value={height}/>

                <WeightPicker set={setWeight} value={weight}/>
            </div>
        </fieldset>
    )
}
