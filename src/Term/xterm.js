import { Terminal } from '../lib/xterm.js';

export function xterm(node, data) {
	let term = new Terminal();
	
	term.open(node);
	term.write(data);
}