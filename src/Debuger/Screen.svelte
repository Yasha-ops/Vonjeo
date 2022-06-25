<script>
    import { fly } from 'svelte/transition';
    import { backInOut } from 'svelte/easing';

    let classes = '';

    export let title = null;
    export let tabs = [];
    export let activeTab = tabs[0];
    export let drawer = false;
    export let drawerTitle = '';
    export { classes as class };
    export let barClass = '', titleClass = '', contentClass = '', drawerClass = '';

    let drawerHeight;
</script>

<section class="screen {classes}">
  <div class="buttons">
    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14">
      <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
        <circle cx="5" cy="5" r="5" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"/>
        <circle cx="25" cy="5" r="5" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"/>
        <circle cx="45" cy="5" r="5" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"/>
      </g>
    </svg>
  </div>

  <div class="bar {barClass}">
	    {#if tabs.length > 0 }
			<nav class="tabs">
				<span class="spacer">&nbsp;</span>
				
				{#each tabs as tab}
					<button class:active={activeTab == tab} on:click={() => activeTab = tab}>{tab}</button>
				{/each}
				
			</nav>
		{:else}
    	    <div class="title {titleClass}">{#if title}{title}{/if}</div>
		{/if}
  </div>

  <div class="content {contentClass}">
    <slot {activeTab}/>
  </div>
	
	{#if drawer}
		<div class="drawer {drawerClass}" bind:clientHeight={drawerHeight} transition:fly={{y: drawerHeight, easing: backInOut}}>
			{#if drawerTitle}
				<div class="drawer-title">
					{drawerTitle}
				</div>
			{/if}
			
			<slot name="drawer"/>
		</div>
	{/if}
</section>

<style>
  @media (prefers-color-scheme: light) {
    :root {
      --screen-border-color: #ccc;
      --screen-background-color: white;
      --screen-shadow-color: #ccc;
      --screen-text-color: #222;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --screen-border-color: #ccc;
      --screen-background-color: #222;
      --screen-shadow-color: #ccc;
      --screen-text-color: white;
    }
  }
  .screen {
    font-family: sans-serif;
    font-size: 1.2rem;
    border: solid 1px var(--screen-border-color);
    border-radius: 0.5rem;
    background: var(--screen-background-color);
    box-shadow: 2px 2px var(--screen-shadow-color);
    color: var(--screen-text-color);
    position: relative;
		overflow: hidden;
  }

  .screen .bar {
    margin-bottom: 1rem;
  }

  .buttons {
    position: absolute;
		padding: 0.5rem 0.5rem;
  }

  .title {
    font-size: 0.8rem;
    color: var(--screen-text-color);
		padding: 0.5rem;
		display: flex;
    justify-content: center;
    place-items: center;
  }
	
	.tabs {
		display: flex;
    justify-content: flex-start;
    place-items: center;
		border-bottom: solid 1px var(--screen-border-color);
	}
	
	.tabs .spacer {
		min-width: 70px !important;
		border-right: solid 1px var(--screen-border-color);		
	}
	
	.tabs button, .tabs .spacer {
		min-height: 32px;
		min-width: 80px;
		background: none;
		border: none;
		border-radius: 0;
		border-right: solid 1px var(--screen-border-color);
		font-size: 0.9rem;
		margin: 0;
		cursor: pointer;
	}
	
	.tabs button:hover, .tabs button.active  {
		background: var(--screen-shadow-color);
	}
	
	.drawer {
		position: absolute;
		bottom: 0px;
		background: var(--screen-background-color);
		border-top: solid 1px var(--screen-border-color);
		font-size: 0.9rem;
		width: 100%;
		padding: 0.2rem;
	}
	.drawer .drawer-title {
		font-weight: 500;
		text-align: left;
		font-size: 0.9rem;
	}
</style>
