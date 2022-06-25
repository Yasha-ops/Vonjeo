<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const panel = {};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);
</script>
<div class="flex-auto w-full bg-red-500" hidden={$selectedPanel !== panel}>
    <slot></slot>
</div>