import { Button, InputValues } from "../types/types";

export default class ControlModel {
    constructor(
        public nameOfControl: string,
        public typeOfInput: string,
        public inputValues: InputValues,
        public setInputValues: React.Dispatch<React.SetStateAction<InputValues>>,
        public lengthAuto?: number,
        public btnLeft?: Button[],
        public btnRight?: Button[],
        public maxHelps?: number
    ) { }
}
