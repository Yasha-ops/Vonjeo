<script>
    let scrollable = false;
    const wheel = (node, options) => {
		let { scrollable } = options;
		
		const handler = e => {
			if (!scrollable) e.preventDefault();
		};
		
		node.addEventListener('wheel', handler, { passive: false });
		
		return {
			update(options) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, { passive: false });
			}
		};
  };
</script>

<svelte:window use:wheel={{scrollable}} />