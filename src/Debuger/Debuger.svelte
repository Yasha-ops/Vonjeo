<script>
    import Flex from 'svelte-flex';
    import { onDestroy } from 'svelte';
    import { HSplitPane } from 'svelte-split-pane';

    import { launchServer, PythonDebug } from '../lib/callPythonDebuger'
    import { debug_on } from '../lib/Store'

    const pd = new PythonDebug('/home/geox/ing1/tlya/tp1/a.out');
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

    let w, h;
</script>


<div class="flex-none w-full h-auto">
    <button on:click={handleClick}>
    	generate random number
    </button>

    {#await promise}
    	<p>...waiting</p>
    {:then number}
    	<p>The number is {number}</p>
    {:catch error}
    	<p style="color: red">{error.message}</p>
    {/await}
</div>


<!--Flex direction="column" align="center" justify="evenly" bind:clientWidth={w} bind:clientHeight={h}>
    <div class="inside" height={h / 3}>
        NON    
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



<div class="flex flex-col flex-auto h-full w-full bg-green-500">
    <div class="inside flex-auto">
        NON
    </div>
    
    <div class="flex-auto">
        <HSplitPane> 
            <div id="blue" slot="left">
                Left
            </div>
    
            <div id="red" slot="right">
                Right
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
</style>