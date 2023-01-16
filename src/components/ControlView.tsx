import React from "react";
import { observer } from "mobx-react";

import ControlVm from "../viewmodels/ControlVm";
import Input from "./Input/Input";

type ControlProps = {
    vm: ControlVm;
};

const ControlView = ({ vm }: ControlProps) => {
    const {
        nameOfControl,
        btnLeft,
        btnRight,
        inputValues,
        setInputValues,
        typeOfInput,
        maxHelps = 0,
    } = vm.model;
    return (
        <div
            style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "10px",
            }}
        >
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                {btnLeft?.map(({ id, title, cb }) => {
                    return (
                        <div key={id}>
                            <button onClick={cb} value={title}>
                                {title}
                            </button>
                        </div>
                    );
                })}
            </div>
            <div>
                <Input
                    vm={vm}
                    nameOfControl={nameOfControl}
                    typeOfInput={typeOfInput}
                    value={inputValues[nameOfControl]}
                    setInputValues={setInputValues}
                    maxHelps={maxHelps}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                }}
            >
                {btnRight?.map(({ id, title, cb }) => {
                    return (
                        <div key={id}>
                            <button onClick={cb} value={title}>
                                {title}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default observer(ControlView);
