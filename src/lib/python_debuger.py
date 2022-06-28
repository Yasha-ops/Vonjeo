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

# Was usefull when using js to spawn a process of this sript.
# Smoll problem: was one at a time and no save ofc :)
# Now will be a flaks server to launch stuff
'''
def send_back(data):
    pprint(data)
    print("FORMAT")
    valid = lambda d: d["message"] is not None or d["payload"] is not None
    f = [ good_format(d) for d in data if valid(d)]
    pprint(f)

    sys.stdout.flush()

def main(args):
    la = len(args)

    if la == 0 or la > 2:
        send_back("ERROR Bad args")
        return

    if args[0] == 'set-breakpoints' and la == 2:
        send_back(gdb_set_breakpoints(args[1]))

    elif args[0] == 'run' and la == 1:
        send_back(gdb_run())

    elif args[0] == 'file' and la == 2:
        send_back(gdb_file(args[1]))

    elif args[0] == 'continue' and la == 1:
        send_back(gdb_continue())

    elif args[0] == 'signal' and la == 2:
        send_back(gdb_signal(args[1]))

    elif args[0] == 'interrupt' and la == 1:
        send_back(gdb_interrupt())

    elif args[0] == 'exit' and la == 1:
        send_back(gdb_exit())
    else:
        send_back("KO Bad args")


if __name__ == '__main__':
    main(sys.argv[1:])

'''
