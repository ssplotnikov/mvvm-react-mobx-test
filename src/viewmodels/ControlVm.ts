import { configure, makeAutoObservable } from "mobx";

import ControlModel from "../models/ControlModel";
import { getCountryByName } from "../services/apiServices";

import { CountryInfo } from "../types/types";

//configure({ enforceActions: "always" });
export default class ControlVm {
    countries: CountryInfo[] = [];
    helpsArray: string[] = [];

    constructor(model: ControlModel) {
        makeAutoObservable(this);

        this.model = model;
    }

    model: ControlModel;

    actionSetHelpsArray = (data: string) => {
        this.helpsArray.push(data);
    };

    setHelpsArray = (country: string) => {
        this.actionSetHelpsArray(country);
    };
    filterArr(arr: CountryInfo[]) {
        return arr.filter(
            (country: CountryInfo) => !this.helpsArray.includes(country.name)
        );
    }
    actionSetCountries = (data: CountryInfo[]) => {
        this.countries = data;
    };

    searchCountryByName = async (countryName: string) => {
        const response = await getCountryByName(countryName);
        if (this.helpsArray.length < 0) {
            this.actionSetCountries(response);
        }
        this.actionSetCountries(this.filterArr(response));
    };
}
