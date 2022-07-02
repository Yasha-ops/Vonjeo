import { readable, writable } from 'svelte/store';

// Hardcoded tabs
export const store_tab_list = writable([
    { name : "One", content:"HELLO"} ,
    { name : "Two", content:"WORLD"} ,
    { name : "Three", content:"HEY"} 
]);

// Some Debug stuff
export const debug_on = writable(false);
export const tab_val = { name: "Debug", content: "pitie le debug"};
let check_debug;

debug_on.subscribe(v => {
    check_debug = v;
});

export function switchDebugMode() {
    console.log("called switchDebugMode");
    debug_on.update(val => !val);

    if (check_debug) {
        store_tab_list.update(cur => {
            cur.push(tab_val);
            return cur;
        });
    }
    else {
        store_tab_list.update(cur => {
            const idx = cur.indexOf(tab_val);
            cur.splice(idx, 1);
            return cur;
        });

    }
}