import { writable } from "svelte/store";

export type WizardState = {
    step:number;
    username:string;
    password:string;
};

export const wizard = writable<WizardState>({
    step:0,
    username:"",
    password:""
});