#!/bin/sh

set -e

echo "Launching the config..."

echo "Processing ..."
cp config_files/vim.js node_modules/brace/keybinding/vim.js
cp config_files/AceEditor.svelte node_modules/svelte-ace/src/AceEditor.svelte
cp config_files/sorcier.js node_modules/brace/theme/sorcier.js
cp config_files/tao.js node_modules/brace/theme/tao.js
cp config_files/karim.js node_modules/brace/theme/karim.js
cp config_files/raphael.js node_modules/brace/theme/raphael.js
cp config_files/eliott.js node_modules/brace/theme/eliott.js
cp config_files/yassine.js node_modules/brace/theme/yassine.js
cp config_files/param.js node_modules/brace/theme/param.js
cp config_files/pov.js node_modules/brace/theme/pov.js
echo "Done !"

exit 0
