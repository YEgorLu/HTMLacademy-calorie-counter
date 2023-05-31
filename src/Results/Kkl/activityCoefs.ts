import {Activity} from "../../MainForm/ActivityPicker/ActivityPicker";

export const activityCoefs = {
    [Activity.Minimal]: 1.2,
    [Activity.Low]: 1.375,
    [Activity.Medium]: 1.55,
    [Activity.High]: 1.725,
    [Activity.Maximal]: 1.9
} as const;
