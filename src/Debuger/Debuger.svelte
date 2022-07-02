<script>
    import { onDestroy } from 'svelte';
    import { HSplitPane } from 'svelte-split-pane';

    import { launchServer, PythonDebug } from '../lib/callPythonDebuger'
    import { debug_on } from '../lib/Store'

    const pd = new PythonDebug('./a.out');
    let promise = null;

    async function handleClick() {
        promise = pd.test();
    }

    let debug_back_proc;

    const stopServer = async () => {
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
            debug_back_proc = await launchServer();
            console.log("debug_back_proc:", debug_back_proc)
        }
        else {
            stopServer();
        }
    });

    onDestroy(() => {
        if ($debug_on)
            stopServer();
    });

    let codes = pd.lines();
    let act = false;
    let files;

    $: if (files) {
        codes = pd.file();
    }

    // suposed to updates text in top div of the page but idk y it doesn't
    // for ex when i click on run it's  not updating D:
    $: act, codes = pd.file();
</script>

<!--Flex direction="column" align="center" justify="evenly" bind:clientWidth={w} bind:clientHeight={h}>
    <div class="inside" height={h / 3}>
        {#await codes}
            <p>Loading ...</p>
        {:then codes}
            <p>{codes}</p>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>

    <SplitPane minWidth={w / 2}>
		<div id="blue" slot="left">
			Left
		</div>

		<div id="red" slot="right">
			Right
		</div>
	</SplitPane>
</Flex-->

<div class="flex flex-col flex-auto h-full w-full">
    <div class="inside flex-auto">
        {#await codes}
            <p>Loading ...</p>
        {:then codes}
            {#each pd.toLines(codes) as line}
                <p>{line}</p>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
    
    <div class="flex-auto">
        <HSplitPane> 
            <div id="blue" slot="left">
                Left
            </div>
    
            <div id="red" slot="right">
                <div class="btn-group">
                    <input type="file" bind:files>
                    <button on:click={async () => { codes = pd.toLines(await pd.continue()); act = !act; }}>
                        Continue
                    </button>
                    <button on:click={async () => { codes = pd.toLines(await pd.run()); act = !act; }}>
                        Run
                    </button>
                    <button on:click={async () => { codes = pd.toLines(await pd.run()); act = !act; }}>
                        Run2
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
        background-color: #4c63af86; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        float: left;
    }

    .btn-group button:hover {
        background-color: #36378f57;
    }
</style>