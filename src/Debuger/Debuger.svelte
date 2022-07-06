<script>
    import { onDestroy, onMount } from 'svelte';
    import { HSplitPane } from 'svelte-split-pane';

    import { launchServer, PythonDebug } from '../lib/callPythonDebuger'
    import { debug_on } from '../lib/Store'

    const pd = new PythonDebug('./a.out');
    let debug_back_proc;
    let vars = null;
    
    let codes;
    let files;

    onMount(async () => {
        const args = { breakpoints: [
                { filename: "main", line: 0 }
            ]};
        const data = await pd.launch(args);
        const txt = await data.text();
        const { variables, infos } = JSON.parse(txt);

        const output = infos.shift()['output'];
        console.log("process output:", output);

        const all = PythonDebug.handleResponse(infos.pop());
        vars = variables;
        codes = all['console'].map(s => s.replace("\t", "    "));

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

    debug_on.subscribe(async v => {
        if (v) {
            debug_back_proc = 0; //await launchServer();
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

    $: files, codes = pd.file();

    const updateVars = () => vars = pd.info("local");

    async function handleCall(toCall) {
        console.log("calling:", toCall);
        // output to get stuff on stdout debuged
        // ex: gdb.write(l) : output contains lines
        //     gdb.write(run) : output contains stdout stuff
        let res_out = PythonDebug.handleResponse(await toCall())['output'];
        // console for code lines
        codes = PythonDebug.handleResponse(await pd.lines())['console'];

        updateVars();
        console.log("vars type:", typeof vars);
        console.log("out", res_out)
    }

    // suposed to updates text in top div of the page but idk y it doesn't
    // for ex when i click on run it's  not updating D:
    // $: act, codes = pd.file();
</script>


<div class="flex flex-col flex-auto h-full w-full">
    <div class="inside flex-auto bg-sky-500/75">
        {#await codes}
            <p>Loading ...</p>
        {:then codes}
            {#each codes as line}
                <p>{line}</p>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
    
    <div class="flex-auto bg-sky-500/75">
        <HSplitPane> 
            <div slot="left" >
                {#if vars}
                    {#await vars}
                        <p>Loading ...</p>
                    {:then vars}
                        {#if PythonDebug.get_vars(vars) === []}
                            <p>No variables.</p>
                        {:else}
                            {#each PythonDebug.get_vars(vars) as a_var}
                                <p>{a_var.name}: {a_var.value}</p>
                            {/each}
                        {/if}
                    {:catch error}
                        <p style="color: red">{error.message}</p>
                    {/await}
                {/if}
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

btn btn-blue
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