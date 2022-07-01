<script>
    import Flex from 'svelte-flex';
    import { onDestroy } from 'svelte';
    import SplitPane from '../lib/SplitPane.svelte'

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

    const codes = pd.lines();

    let w, h;
</script>


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

<Flex direction="column" align="center" justify="evenly" bind:clientWidth={w} bind:clientHeight={h}>
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
</Flex>

<style>
    .inside {
        height: 100%;
        width: 100%;
        border-color: rgb(83, 177, 156);
        border-width: 4px;
        background-color: rgb(39 39 42 / var(--tw-bg-opacity));
        width: 100% !important;
    }
</style>