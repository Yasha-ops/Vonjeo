#!/bin/sh
echo "yes"
ab="readlink -f src/spotify/server | xargs dirname"
cd ab
npm start
sleep 1.5

ln -s ~/src/spotify/client ~/cli
cd ~/cli
npm start
