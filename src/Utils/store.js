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

export const store_tabs = writable([]);
export const tabs = writable([]);
export const panels = [];






export let showSpotify = writable(false);
export let showTimer = writable(false);
export let launchedTimer = writable(false);
export let timerFinished = writable(false);

export let showTrippyScreen = writable(true);
export let playTimeToStop = writable(true);

export class TimerDate{
    constructor(hour, minute, seconds) {
        this.hour = hour;
        this.minute = minute ;
        this.seconds = seconds;
      }
}
 
export let timerSettings = writable(new TimerDate(0, 0, 10))


export const logger = (type) => {
    return function (line) {
        return function (message) {
            return `[${type}][${line}]: ${message}`
        }
    }
}

export const INFO = logger("INFO");
export const ERROR = logger("ERROR");
export const DEBUG = logger("DEBUG");

export let nbr_screens = writable(1);

/* TODO
 * Once the project open button is implemented:
 *     - replace this with null
 *     - set it from the project selection event function
 *     - ???
 *     - profit
 */
export let file_tree = writable(null);


export const LanguagesType = Object.freeze({
    FRENCH : "Francais",
    ENGLISH : "English",
    MALGACHE : "Malgache"
})

export let FONTSIZE = writable(10);
export let FONTTYPE = writable(10);
export let THEME = writable(10);
export let LANGUAGE = writable(LanguagesType.ENGLISH);

export let fontTypeOptions = ["Source Code Pro", "Major Mono Display", "Roboto Mono", "Nanum Gothic Coding", "VT323", "Noto Sans Mono"];
export let themeOptions = ["chaos", "clouds", "cobalt", "dawn", "dracula", "eliott", "github", "gob", "idle_fingers", "karim", "kuroir", "monokai", "param",  "pov", "raphael", "sorcier", "tao", "textmate", "tomorrow", "twilight", "yassine"]
export let fontSizeOptions = [ 10, 11, 12, 13, 14, 15, 16, 24, 28, 32, 36, 40, 44, 48, 52, 56]

export let languagesOptions = [LanguagesType.ENGLISH, LanguagesType.FRENCH , LanguagesType.MALGACHE];
