<script lang="ts">
        //enum for state of stopwatch
    enum STATE {
      BORN,
      RUNNING,
      PAUSED,
    }
    let state : STATE  =STATE.BORN;
    let startTime: number = 0;
    let elapsedTime: number = 0;

    let elapsed_paused = 0;

    let interval;

    const pad_zeros = (number:number) => `00${number}`.slice(-2);

    const pad_zeros_mil = (number:number) => `000${number}`.slice(-3);
    

    $: hours = pad_zeros(Math.floor((((elapsedTime / 1000) / 60)/ 60) % 60));
    $: sec = pad_zeros(Math.floor((elapsedTime / 1000) % 60));
    $: min = pad_zeros(Math.floor(((elapsedTime / 1000) / 60) % 60));

    $: milsec = pad_zeros_mil(elapsedTime % 1000);
    $: formatted_time = `${hours}:${min}:${sec}.${milsec}`;

    const start_timer = () => {
        state = STATE.RUNNING;
        startTime = Date.now();
        interval = setInterval(() =>
        {
            //to ensure that when paused, it does not keep running
            if (state === STATE.RUNNING)
            {
                const endTime = Date.now();
                elapsedTime = endTime - startTime + elapsed_paused;
            }
        });

    }

    const reset_time = () =>
    {
        elapsedTime = 0;
        state = STATE.BORN;
        clearInterval(interval);
    }

    const pause_time = () =>
    {
        state = STATE.PAUSED;
        elapsed_paused = elapsedTime;
    }

    const resume_time = () =>
    {
        startTime = Date.now();
        state = STATE.RUNNING;
    }

</script>






<div class="glass width-2/3 h-32 p-4">
    <h1 class="mb-2 text-2xl text-blue-700 border-b border-white">
      Stop Watch Timer</h1>
    <p class="mb-2 text-xl text-white">Elapsed Time: {formatted_time}</p>

  <div class="text-left">

    {#if state === STATE.BORN}
    <button 
    on:click={start_timer}
    class="mr-2 text-xl px-2 border-white rounded text-blue-900">Start</button>
    {/if}
    
    {#if state === STATE.RUNNING}
    <button 
    on:click={pause_time}
    class="mr-2 text-xl px-2 border-white rounded text-blue-700">Pause</button>
    {/if}

    {#if state === STATE.PAUSED}
    <button 
    on:click={resume_time}
    class="mr-2 text-xl px-2 border-white rounded text-blue-500">Resume</button>
    <button 
    on:click={reset_time}
    class="mr-2 text-xl px-2 border-white rounded text-blue-300">Reset</button>
    {/if}

</div>
    </div>




<style>
    .glass {
      background: rgba(255, 235, 233, 0.15);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(5px);
      border-radius: 10px;
    }
    </style>





<div class="text-left">

    <button 
    on:click={}
    class="mr-2 text-xl px-2 border-white rounded text-blue-900">Start</button>
    
    <button 
    on:click={}
    class="mr-2 text-xl px-2 border-white rounded text-blue-700">Pause</button>
  
    <button 
    on:click={}
    class="mr-2 text-xl px-2 border-white rounded text-blue-500">Resume</button>
    <button 
    on:click={}
    class="mr-2 text-xl px-2 border-white rounded text-blue-300">Reset</button>
  
  </div>
    </div>
  