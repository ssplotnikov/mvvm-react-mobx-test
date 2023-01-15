import React, { useState } from "react";

import ControlVm from "./viewmodels/ControlVm";
import ControlView from "./components/ControlView";
import { InputValues } from "./types/types";

function App() {
    const [inputValues, setInputValues] = useState<InputValues>({});

    const isNumber = (v: string) => /^\d+/.test(v);

    const controlData4 = {
        nameOfControl: "control4",
        inputValues,
        setInputValues,
        typeOfInput: "search",
        maxHelps: 10,
    };
    const controlData3 = {
        nameOfControl: "control3",
        inputValues,
        setInputValues,
        typeOfInput: "search",
        maxHelps: 3,
    };
    const controlData2 = {
        nameOfControl: "control2",
        inputValues,
        setInputValues,
        typeOfInput: "text",
        btnLeft: [
            {
                id: 1,
                title: "Number or not",
                cb: () => {
                    if (isNumber(inputValues[controlData2.nameOfControl])) {
                        alert(inputValues[controlData2.nameOfControl]);
                    }
                },
            },
        ],
        btnRight: [
            {
                id: 1,
                title: "Alert",
                cb: () => {
                    alert(inputValues[controlData2.nameOfControl]);
                },
            },
        ],
    };
    const controlData1 = {
        nameOfControl: "control1",
        inputValues,
        setInputValues,
        typeOfInput: "text",
        btnRight: [
            {
                id: 1,
                title: "Clear Input",
                cb: () => {
                    setInputValues((prev) => {
                        return {
                            ...prev,
                            [controlData1.nameOfControl]: "",
                        };
                    });
                },
            },
            {
                id: 2,
                title: "Hello world",
                cb: () => {
                    setInputValues((prev) => {
                        return {
                            ...prev,
                            [controlData1.nameOfControl]: "Hello world",
                        };
                    });
                },
            },
        ],
    };

    const vm1 = new ControlVm(controlData1);
    const vm2 = new ControlVm(controlData2);
    const vm3 = new ControlVm(controlData3);
    const vm4 = new ControlVm(controlData4);

    return (
        <>
            <ControlView vm={vm1} />
            <ControlView vm={vm2} />
            <ControlView vm={vm3} />
            <ControlView vm={vm4} />
        </>
    );
}

export default App;
