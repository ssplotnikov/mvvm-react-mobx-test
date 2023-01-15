import React from "react";

import Autocomplete from "./Autocomplete";
import ControlVm from "../../viewmodels/ControlVm";
import { InputValues } from "../../types/types";

interface InputProps {
    typeOfInput: string;
    value: string;
    nameOfControl: string;
    setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
    vm: ControlVm;
    maxHelps: number;
}

const Input = ({
    nameOfControl,
    value,
    typeOfInput,
    vm,
    setInputValues,
    maxHelps = 0,
}: InputProps) => {
    if (typeOfInput === "search") {
        return (
            <Autocomplete
                value={value}
                setInputValues={setInputValues}
                vm={vm}
                nameOfControl={nameOfControl}
                maxHelps={maxHelps}
            />
        );
    }
    return (
        <div>
            <input
                value={value}
                onChange={(e) => {
                    setInputValues((prev) => ({
                        ...prev,
                        [nameOfControl]: e.target.value,
                    }));
                }}
            />
        </div>
    );
};

export default Input;
