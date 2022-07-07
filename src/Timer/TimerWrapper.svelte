<script>
    import { fade, scale, fly } from 'svelte/transition';

    import DraggableComponent  from './../Utils/DraggableComponent.svelte';
    
    import { launchedTimer, showTimer, timerSettings, timerFinished } from './../Utils/store';

    let h = $timerSettings.hour;
    let m = $timerSettings.minute;
    let s = $timerSettings.seconds;
    $: m = $timerSettings.minute; 
    $: s = $timerSettings.seconds; 
    $: h = $timerSettings.hour; 

    let old_h = h;
    let old_m = m; 
    let old_s = s;

    import Icon from 'svelte-icons-pack/Icon.svelte';

    import BsPauseFill from "svelte-icons-pack/bs/BsPauseFill";
    import BsPlayFill from "svelte-icons-pack/bs/BsPlayFill";



    function toggleState(){
        launchedTimer.set(! $launchedTimer);
    }

    setInterval(() => {
        if ( ! $launchedTimer)
            return;
        
        if (h == 0 && m == 0 && s == 0){
            timerFinished.set(true);
            launchedTimer.set(!$launchedTimer);
            h = old_h;
            m = old_m;
            s = old_s;
            return;
        }

        if  (m == 0 && s == 0) {
            h =  h - 1
            m = 60;
        }

        if (s == 0){
            m = m - 1;
        }

        s = (s > 0) ? s - 1 : 59;
    }, 1000);
    
</script>



<DraggableComponent>

    {#if $showTimer}
         <div class="bg-[#191414] h-auto w-auto  rounded-lg flex" in:scale={{duration: 1000}} out:scale={{duration: 1000}}>

             <div class="flex flex-none mr-2 ml-2 justify-center items-center" class:pause={$launchedTimer} class:play={!$launchedTimer} name="Icon" on:click={toggleState}>
                 {#if ! $launchedTimer}
                     <Icon src={BsPlayFill} size="40"/>
                 {:else}
                     <Icon src={BsPauseFill} size="40"/>
                 {/if}
             </div>


             <span class="flex-none countdown font-mono text-2xl mt-2 mb-2 mr-2 text-white" class:critique={h == 0 && m == 0 && s <= 10 && s != 0 && $launchedTimer}
                 class:visible={$showTimer} class:unvisible={!$showTimer}>
                 <span style="--value:{h};" id="timer_h"></span>:
                 <span style="--value:{m};" id="timer_m"></span>:
                 <span style="--value:{s};" id="timer_s"></span>
             </span>
         </div>
    {/if}
</DraggableComponent>

<style>
    .pause{
        @apply text-[#AAAD00];
    }

    .play{
        @apply text-[#278D03];
    }

    .critique{
        @apply text-[#B91D1D];
    }
</style>