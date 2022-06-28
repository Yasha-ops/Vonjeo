#!/bin/sh

set -e

echo "Launching the config..."

echo "Processing ..."
cp config_files/vim.js node_modules/brace/keybinding/vim.js
cp config_files/AceEditor.svelte node_modules/svelte-ace/src/AceEditor.svelte
echo "Done !"

exit 0