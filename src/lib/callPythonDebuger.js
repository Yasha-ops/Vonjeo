import { component_subscribe } from "svelte/internal";

const port = 5555;
const backend_port = 8000;
const backend = 'http://localhost:' + backend_port;

// Launch server in bg
export async function launchServer() {
    const val = "FLASK_APP=./python_debuger.py python -m flask run -p " + port;
    const args = { value: val };
    console.log(JSON.stringify(args));

    const res = await fetch(backend + "/cmd", {
        method: "POST",
        headers: [ ['Content-Type', 'application/json'] ], 
        body: JSON.stringify(args)
    });

    const txt = await res.text();
    console.log("Launched server:", res, txt);
     
    const data = JSON.parse(txt);
    return data['value'];

}

// return txt content for the request at url
async function getFetchContent(url) {
    const res = await fetch(url);
    const data = await res.text();

    return data;
}

Object.values = obj => Object.keys(obj).map(key => obj[key]);

/*
/name -> endpoint: {
    type: [gdb command] (what is usefull to get in this object)
} -> content

/launch : {
    variables,
    infos: [
        all_type: run   (ouptut for stdout, console for gdb message)
        all_type: l     (console for lines)
    ](size: 2)
}

/lines : {
    all_type:           (console for stdout)
}

/[continue|next|step] : {
    all_type:           (output for stdout, console for gdb message)
}
*/
export class PythonDebug {
    constructor(filename) {
        this.filename = filename;
    }

    async test() {
        console.log("Called test")
        return await getFetchContent('http://localhost:' + port + "/test");
    }

    // See python backend
    async launch(args) {
        return await fetch("http://localhost:5555/launch/" + this.filename, {
            method: "POST",
            headers: [ ['Content-Type', 'application/json'] ], 
            body: JSON.stringify(args)
        });
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

    async step() {
        return await getFetchContent('http://localhost:' + port + "/step");
    }
    
    async next() {
        return await getFetchContent('http://localhost:' + port + "/next");
    }

    async signal(val) {
        return await getFetchContent('http://localhost:' + port + "/signal/" + val);
    }

    async lines() {
        return await getFetchContent('http://localhost:' + port + "/lines");
    }

    async info(val) {
        return await getFetchContent('http://localhost:' + port + "/info/" + val);
    }

    async exit() {
        return await getFetchContent('http://localhost:' + port + "/exit");
    }

    static get_data(result) {
        return result.map(obj =>
            (typeof obj === "object") ? obj['msg'] : obj
        );
    }

    // See backend result (idk why it returns a string sometimes instead of an array)
    static get_vars(result) {
        console.log("vars result:", result, typeof result);

        if  (typeof result === "string") {
            return [];
        }
        try
        {
            if (result.join('') === "No registers.")
            {
                return [];
            }
        }
        catch (e) {return result;}
        
        return result;
    }

    // run continue next step
    // Yes ugly !
    // Get the text response from python backend and see if it's already a json or not
    // Idk why sometimes it wouldn't work
    static handleResponse(input) {
        console.log("input:", input);
        try {
            const data = JSON.parse(input);

            console.log("LOG DEBUGER:", data['log']);
            console.log("NOTIFY DEBUGER:", data['notify']);
            console.log("TARGET DEBUGER:", data['target']);
            console.log("DONE DEBUGER:", data['done']);
            console.log("RESULT DEBUGER:", data['result']);

            return data;
        } catch (error) {
            return input;
        }
    }
}
