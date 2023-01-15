import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react";

import { InputValues } from "../../types/types";

import "./Autocomplete.css";
import ControlVm from "../../viewmodels/ControlVm";
import { RenderAutocomplete } from "./RenderAutocomplete";
import useDebounce from "../../hooks/useDebounce";

interface AutocompleteProps {
    nameOfControl: string;
    value: string;
    setInputValues: React.Dispatch<React.SetStateAction<InputValues>>;
    vm: ControlVm;
    maxHelps: number;
}

const Autocomplete = ({ vm, maxHelps }: AutocompleteProps) => {
    const [active, setActive] = useState<number>(0);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [autoValue, setAutoValue] = useState("");
    const debouncedValue = useDebounce(autoValue, 100);
    const divRef = useRef<HTMLDivElement>(null);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setActive(0);
        setIsShow(true);
        setAutoValue(e.target.value);
    };

    const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            setActive(0);
            setIsShow(false);
            vm.setHelpsArray(vm.countries[active].name);
            setAutoValue(vm.countries[active].name);
        } else if (e.key === "ArrowUp") {
            return active === 0 ? null : setActive(active - 1);
        } else if (e.key === "ArrowDown") {
            return active - 1 === vm.countries.length
                ? setActive(0)
                : setActive(active + 1);
        }
    };

    useEffect(() => {
        if (debouncedValue) {
            vm.searchCountryByName(debouncedValue);
        }
    }, [debouncedValue]);

    useEffect(() => {
        if (!divRef.current) return;

        divRef.current.scrollIntoView({
            block: "center",
        });
    }, [active]);

    return (
        <>
            <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={autoValue}
            />
            <div>Select helps - {vm.helpsArray.length}</div>
            <div>Max helps - {maxHelps}</div>
            {vm.helpsArray.length < maxHelps ? (
                <RenderAutocomplete
                    isShow={isShow}
                    active={active}
                    value={autoValue}
                    countries={vm.countries}
                    divRef={divRef}
                />
            ) : (
                <div>You used all helps</div>
            )}
        </>
    );
};
export default observer(Autocomplete);
