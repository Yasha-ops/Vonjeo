from flask import Flask, request, jsonify, after_this_request
import subprocess
import os
import time

import shlex



commands = (
    
    "gnome-terminal --tab -- bash -c \"sh spotify.sh ; exec bash\"",
    # Open a new tab and display time and an error message
    "gnome-terminal --tab -- bash -c \"sh cli_spotify.sh ; exec bash\"",
    # Display command results from log
    "cat my.log",)

for c in commands:
    subprocess.run(shlex.split(c))
    time.sleep(0.5)





on = False


app = Flask(__name__)


@app.route('/', methods=['GET'])
def hello():
    on = True
    return jsonify({"yes" :1})

if __name__ == '__main__':
    app.run(host='localhost', port=8989)
    




