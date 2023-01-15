import React from "react";

import { CountryInfo } from "../../types/types";

interface Props {
    isShow: boolean;
    value: any;
    countries: any;
    divRef: any;
    active: any;
}

export const RenderAutocomplete = ({
    isShow,
    value,
    countries,
    divRef,
    active,
}: Props) => {
    if (isShow && value) {
        if (countries.length) {
            return (
                <ul className="autocomplete">
                    {countries.map((suggestion: CountryInfo, index: React.Key) => {
                        let className;
                        if (index === active) {
                            className = "active";
                        }
                        return (
                            <li
                                className={className}
                                key={suggestion.name}
                                ref={index === active ? divRef : null}
                            >
                                <div>{suggestion.name}</div>
                                <div>{suggestion.fullName}</div>
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return (
                <div className="no-autocomplete">
                    <em>Not found</em>
                </div>
            );
        }
    }
    return <></>;
};
