import { writable } from 'svelte/store';
import { xterm } from './lib/xterm.js';

export const count = writable(0);
export const tabs = writable([]);
export const terminal = <div use:xterm={"Hello terminal user! yftuyf"}/>;