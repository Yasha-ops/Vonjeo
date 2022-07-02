import { writable, derived } from "svelte/store";

export const TypeFile = Object.freeze({
    FILE: 1,
    DEBUG: 2
});

export const SpotifyState = Object.freeze({
    CONNECT: "Connect",
    WAITING: "Waiting...",
    DEVICE: "Select device",
    ERROR: "Error"
})

export const store_tabs = writable([
    [
    	{type: TypeFile.FILE, filename:"Orange", content:"ORANGE", id:"panel-Orange", mIndex: 0},
    	{type: TypeFile.FILE, filename:"Pineapple",content:"PINEAPPLE", id:"panel-Pineapple", mIndex: 0},
    	{type: TypeFile.FILE, filename:"Peach", content:"PEACH", id:"panel-Peach", mIndex: 0}
    ]
]);

export const tabs = writable([[]]);
export const panels = [[]];

export let showSpotify = writable(false);


export const logger = (type) => {
    return function(line){
        return function(message){
            return `[${type}][${line}]: ${message}`
        }
    }
}

export const INFO = logger("INFO");
export const ERROR = logger("ERROR");
export const DEBUG = logger("DEBUG");

export let nbr_screens = writable(1);
