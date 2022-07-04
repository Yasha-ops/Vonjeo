<script>
    import SpotifyWindow from './SpotifyWindow.svelte'; 
    import { SpotifyState } from './../Utils/store.js';
    
    import DraggableComponent from "../Utils/DraggableComponent.svelte";
    import { WebPlayback } from 'svelte-spotify-web-playback';

    const client_id = '59c441dcbab547ff970b90b30bfd6e67';

    let wrapper;
</script>



<DraggableComponent>
    <div class="spotify-drawer">
        <WebPlayback {client_id}  name="My Spotify Player"  volume={0.5}  bind:this={wrapper}>
            <!-- Direct usage -->
             <div slot="login">
                 <SpotifyWindow state={SpotifyState.CONNECT} on:onclick={() => wrapper.login()}/>
             </div>
             
             <div slot="loading">
                 <SpotifyWindow state={SpotifyState.WAITING} on:onclick={() => 0}/>
             </div>
             
             <div slot="waiting">
                 <SpotifyWindow state={SpotifyState.DEVICE} on:onclick={() => wrapper.selectDevice()}/>
             </div>


        </WebPlayback>
    </div>
</DraggableComponent>

