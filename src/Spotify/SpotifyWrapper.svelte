<script>
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
                 <button on:click={() => wrapper.login()}>Login with Baby</button>
             </div>
        </WebPlayback>
    </div>
</DraggableComponent>

