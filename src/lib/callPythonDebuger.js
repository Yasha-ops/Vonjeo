
const port = 5555;
const backend_port = 8000;
const backend = 'localhost:' + backend_port;

// Launch server in bg
export async function launchServer() {
    let response = await new Promise(resolve => {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", backend + "/cmd", true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = () => { resolve(xhr.response);  };
        xhr.onerror = () => {
            resolve(undefined);
          console.error("** An error occurred during the XMLHttpRequest");
        };

        const args = [ 'FLAKS_APP = ./python_debuger.py python', '-m', 'flask', 'run', '--host=0.0.0.0', '-p', port ].join(" ");
        xhr.send(JSON.stringify({ value: args }));
     });

     console.log("Launched server:", response);
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
