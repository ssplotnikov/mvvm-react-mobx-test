export interface Button {
    id: number;
    title: string;
    cb: () => void;
}
export interface InputValues {
    [key: string]: string;
}
export interface CountryInfo {
    name: string;
    fullName: string;
    flag: string;
}
