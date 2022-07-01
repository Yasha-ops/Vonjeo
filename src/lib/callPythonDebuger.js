
const port = 5555;
const backend_port = 8000;
const backend = 'http://localhost:' + backend_port;

// Launch server in bg
export async function launchServer() {
    const val = "FLASK_APP=./python_debuger.py python -m flask run --host=0.0.0.0 -p " + port;
    const args = { value: val };
    console.log(JSON.stringify(args));

    const res = await fetch(backend + "/cmd", {
        method: "POST",
        headers: [ ['Content-Type', 'application/json'] ], 
        body: JSON.stringify(args)
    });

     console.log("Launched server:", res);
     const txt = await res.text();
     console.log(txt);
     const data = JSON.parse(txt);
     return data['value'];

}

async function getFetchContent(url) {
    const res = await fetch(url);
    const data = await res.text();

    return data;
}

export class PythonDebug {
    constructor(filename) {
        this.filename = filename;
    }

    async test() {
        console.log("Called test")
        return await getFetchContent('http://localhost:' + port + "/test");
    }

    async file() {
        return await getFetchContent('http://localhost:' + port + "/file/" + this.filename);
    }

    async set_breakpoint(fname, nbLine) {
        return await getFetchContent('http://localhost:' + port + "/set/breakpoints/"
            + fname + "/" + nbLine);
    }

    async run() {
        return await getFetchContent('http://localhost:' + port + "/run");
    }

    async continue() {
        return await getFetchContent('http://localhost:' + port + "/continue");
    }

    async signal(val) {
        return await getFetchContent('http://localhost:' + port + "/signal/" + val);
    }

    async interrupt() {
        return await getFetchContent('http://localhost:' + port + "/interrupt");
    }

    async lines() {
        return await getFetchContent('http://localhost:' + port + "/lines");
    }

    async exit() {
        return await getFetchContent('http://localhost:' + port + "/exit");
    }
}
