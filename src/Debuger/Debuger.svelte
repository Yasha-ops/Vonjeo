<script>
    import { onDestroy, onMount } from 'svelte';
    import { HSplitPane } from 'svelte-split-pane';

    import { launchServer, PythonDebug } from '../lib/callPythonDebuger'
    import { debug_on } from '../lib/Store'

    let files = './a.out';
    let debug_back_proc;
    let vars = ['1'];
    let codes = [];
    let pd = new PythonDebug(files);

    let resultant = [];
    const mount = async () => {
        // TODO: ok how tf do i get the breakpoints ?
        pd = new PythonDebug(files);
        const args = { breakpoints: [
                { filename: "main", line: 6 }
            ]};
        const data = await pd.launch(args);
        const txt = await data.text();
        const { variables, infos } = JSON.parse(txt);

        const output = infos[0]['output'];
        const msg = infos[0]['console'];
        console.log("process output:", output);
        console.log("gdb msg:", msg);

        const all = PythonDebug.handleResponse(infos.pop());
        vars = variables;
        codes = all['console'];
    }

    onMount(async () => {
        mount();
    });

    const stopServer = async () => {
        console.log("Stopped debug server");
        const val = "kill " + debug_back_proc;
        const args = { value: val };

        const res = await fetch("http://localhost:8000/cmd", {
            method: "POST",
            headers: [ ['Content-Type', 'application/json'] ], 
            body: JSON.stringify(args)
        });
    };

    // At start / end of debug mode (clicked debug button)
    debug_on.subscribe(async v => {
        if (v) {
            debug_back_proc = await launchServer();
            console.log("debug_back_proc:", debug_back_proc);
        }
        else {
            stopServer();
        }
    });

    onDestroy(() => {
        if ($debug_on)
            stopServer();
    });

    const updateVars = () => vars = pd.info("local");

    async function handleCall(toCall) {
        console.log("calling:", toCall);
        // output to get stuff on stdout debuged
        // ex: gdb.write(l) : output contains lines
        //     gdb.write(run) : output contains stdout stuff
        const out = PythonDebug.handleResponse(await toCall());
        const res_out = out['output'];
        const msg_out = out['console'];
        // console for code lines
        codes = PythonDebug.handleResponse(await pd.lines())['console'];

        updateVars();
        let yes = await PythonDebug.get_vars(vars);
        let vv = []
        let resu = []
        let end = []
        for (let x of yes )
        {
            vv.push(x);
            console.log(vv);
            let str = vv.join(' ');
            console.log("asfsdvds svsfvrbrerbtbtrrtbt",str);
            resu.push(str);
            vv = [];
            end.push(resu.join(" "));
            
        }
        resultant.push(end[end.length - 1]);
        
        console.log("res_out", res_out);
        console.log("msg_out", msg_out);
    }

    $: files, async () => await mount();
</script>


<div class="flex flex-col flex-auto h-full w-full">
    <div class="inside flex-auto bg-sky-500/75">
        {#await codes}
            <p>Loading ...</p>
        {:then codes}
            <p style="color:white">/!\ DISPLAYS NOTHING IF IT RUNS CORRECTLY /!\</p>
            {#each codes as line}
                <p style="color:white">{line}</p>
            {/each}
        {:catch error}
            <p style="color:red">{error.message}</p>
        {/await}
    </div>
    
    <div class="flex-auto bg-sky-500/75">
        <HSplitPane> 
            <div slot="left" >
                    <p style="color:red">Variables</p>
                    {#await vars}
                        <p>Loading ...</p>
                    {:then vars}
                        {#if vars === []}
                            <p style="color:red">No variables.</p>
                        {:else}
                                <p style="color:red">{resultant}</p>

                        {/if}
                    {:catch error}
                        <p style="color: red">{error.message}</p>
                    {/await}
            </div>
    
            <div slot="right">
                <div class="btn-group">
                    <input type="file" bind:files>
                    <button on:click={ () => handleCall(pd.run) }>
                        Run
                    </button>
                    <button on:click={async () => await pd.exit() }>
                        Stop
                    </button>

                    <button on:click={ () => handleCall(pd.continue) }>
                        Continue
                    </button>
                    <button on:click={ () => handleCall(pd.next) }>
                        Next
                    </button>
                    <button on:click={ () => handleCall(pd.step) }>
                        Step
                    </button>
                </div>
            </div>
        </HSplitPane>
    </div>

</div>


<style>
    .inside {
        border-color: rgb(83, 177, 156);
        border-width: 4px;
        background-color: rgb(39 39 42 / var(--tw-bg-opacity));
    }

    .btn-group button {
        @apply font-bold py-2 px-4 rounded;
        @apply bg-blue-500 text-white;
    }

    .btn-group button:hover {
        @apply bg-blue-700;
    }
</style>