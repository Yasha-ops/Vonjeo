
<script>
    import { timerFinished , playTimeToStop, showTrippyScreen} from './../Utils/store.js';
    import { fade, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    function removeScreen(){
        timerFinished.set(false);
        visible = false;
    }

    let audio

    function startTimer() {
      if ($playTimeToStop)
      {
        audio.play()
      }
        return true;
    }

</script>

<audio src="https://cdn.discordapp.com/attachments/993602272590311568/993926567975723088/its_time_to_stop_mp3cut.net.mp3" bind:this={audio}></audio>

{#if $timerFinished && startTimer() && $showTrippyScreen}
    <div class="
        w-full
        h-screen
        bg-gradient-to-r
        from-[#007BCA]
        via-[#1DB954]
        to-yellow-500
        background-animate
        flex
        justify-center
        items-center
        take-break" on:click={removeScreen} id="break_screen" in:scale="{{duration: 1000}}" out:fade="{{duration: 500}}">
      <h1 class="text-9xl text-white">Take a break !</h1>
    </div>
{/if}

<style>
    .take-break{
        z-index: 2200;
    }

  .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>
