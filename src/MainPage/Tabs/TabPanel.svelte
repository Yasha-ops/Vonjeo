<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	export let id;
	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

<div class:panel-actif="{$selectedPanel === panel}" class:panel-passif="{$selectedPanel !== panel}" id={id}>
	<slot></slot>
</div>