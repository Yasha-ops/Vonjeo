<script>
    import { launchServer, PythonDebug } from '../lib/callPythonDebuger'
    import { debug_on } from '../lib/Store'
    const kill  = require('tree-kill');

    const pd = new PythonDebug('/home/geox/ing1/tlya/tp1/a.out');
    let promise = pd.test();

    function handleClick() {
        promise = pd.test();
    }

    /*
    const filed = pd.file().then(console.log);
    const ran = pd.run().then(console.log);
    const bps = [ { file: "tp1q4.cc", nb_line: 60 } ];
    */

    // /!\
    // TODO: MOVE THIS OUT OF WEB BROWSER cuz i can't spwan process
    // inside it :c. 

    let debug_back_proc;

    debug_on.subscribe(v => {
        if (v) {
            debug_back_proc = launchServer();
        }
        else {
            kill(debug_back_proc.pid);
        }
    });
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