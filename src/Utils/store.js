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
	//{type: TypeFile.FILE, filename:"Orange", content:"ORANGE", id:"panel-Orange"},
	{type: TypeFile.FILE, filename:"Pineapple",content:"PINEAPPLE", id:"panel-Pineapple"},
	{type: TypeFile.FILE, filename:"Peach", content:"PEACH", id:"panel-Peach"}
]);

export const tabs = writable([]);
export const panels = [];

export let showSpotify = writable(false);
export let showTimer = writable(false);
export let launchedTimer = writable(false);
export let timerFinished = writable(false);

class TimerDate{
    constructor(hour, minute, seconds) {
        this.hour = hour;
        this.minute = minute ;
        this.seconds = seconds;
      }
}
 
export let timerSettings = writable(new TimerDate(0, 0, 10))


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

export let nbr_screens = writable(0);