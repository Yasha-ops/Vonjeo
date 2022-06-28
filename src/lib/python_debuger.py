from flask import Flask
from random import randrange
# https://github.com/cs01/pygdbmi
# pip install pygdbmi
from pygdbmi.gdbcontroller import GdbController
from pprint import pprint

app = Flask(__name__)
gdbmi = GdbController()

@app.route("/test")
def test():
    return "OUI: " + randrange(100)

@app.route("/file/<path:fn>")
def gdb_file(fn):
    return str(gdbmi.write("file " + fn))

@app.route("/set/breakpoints/<fn>/<nb>")
def gdb_set_breakpoints(fn, nb):
    # array of { file, nb_line }
    # print(bps)
    # res =  [ gdbmi.write('-break-insert' + b.file + b.nb_line) for b in bps ]
    res = gdbmi.write('-break-insert ' + fn + ':' + nb)
    pprint(res)

    return str(res)

@app.route("/run")
def gdb_run():
    return str(gdbmi.write('-exec-run'))

@app.route("/continue")
def gdb_continue():
    return str(gdbmi.write('-exec-continue'))

@app.route("/signal/<val>")
def gdb_signal(val):
    return str(gdbmi.send_signal_to_gdb(val))

@app.route("/interrupt")
def gdb_interrupt():
    return str(gdbmi.interrupt_gdb())

@app.route("/exit")
def gdb_exit():
    return str(gdbmi.exit())

def good_format(data):
    msg = data["message"]
    pld = data["payload"]

    if (msg is not None and pld is not None):
        return str(msg) + ": " + str(pld)
    if (msg is None):
        return str(pld)
    return str(msg)