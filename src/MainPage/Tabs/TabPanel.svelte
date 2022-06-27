<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>

<div class:panel-actif="{$selectedPanel === panel}" class:panel-passif="{$selectedPanel !== panel}">
	<slot></slot>
</div>