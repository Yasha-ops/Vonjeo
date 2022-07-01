<script>
  import { WebPlayback } from 'svelte-spotify-web-playback';
  import CustomPlayer from './src/my_custom_player.svelte';
  const client_id = 'your_client_id';
  let wrapper; // Reference to our wrapper element.
</script>

<WebPlayback 
  {client_id} 
  name="My Spotify Player" 
  volume={0.5} 
  bind:this={wrapper}
>
  <!-- Direct usage -->
  <div slot="login">
      <button on:click={() => wrapper.login()}>Login with Spotify</button>
  </div>
  <!-- Custom element usage -->
  <CustomPlayer slot="player" let:player let:state {player} {state} />
</WebPlayback>