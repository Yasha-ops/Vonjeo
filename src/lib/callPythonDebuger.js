import child_process from 'child_process';
// import { fetch } from 'node-fetch';
const spawn = child_process.spawn;

const port = 5555;
// Launch server in bg
export function launchServer() {
    if (!process.env['FLASK_APP'])
        process.env['FLASK_APP'] = './python_debuger.py';

    return spawn(
        'python',
        [ '-m', 'flask', 'run', '--host=0.0.0.0', '-p', port ]
    );
}

async function getExec(process, args)
{
    // console.log("args:", args);
    const proc = spawn(process, args);
    let res = "";

    for await (const chunk of proc.stdout)
    {
        // console.log("chunk:", chunk.toString());
        res += chunk;
    }

    return res;
}

async function getFetchContent(url) {
    const res = await fetch(url);
    const data = await res.text();

    return data;
}

export class PythonDebug {
    constructor(filename) {
        this.filename = filename;
        this.dbg = './python_debuger.py';
    }

    async test() {
        return await getFetchContent('localhost:' + port + "/test");
    }

    // file() { return getExec('python', [ this.dbg, 'file', this.filename ]); }
    async file() {
        return await getFetchContent('localhost:' + port + "/file/" + this.filename);
    }

    async set_breakpoint(fname, nbLine) {
        return await getFetchContent('localhost:' + port + "/set/breakpoints/"
            + fname + "/" + nbLine);
    }

    async run() {
        return await getFetchContent('localhost:' + port + "/run");
    }

    async continue() {
        return await getFetchContent('localhost:' + port + "/continue");
    }

    async signal(val) {
        return await getFetchContent('localhost:' + port + "/signal/" + val);
    }

    async interrupt() {
        return await getFetchContent('localhost:' + port + "/interrupt");
    }

    async exit() {
        return await getFetchContent('localhost:' + port + "/exit");
    }
}
