(function() {

// alphabet-agnostic, and doesn't check for characters w/o defined rules
// ie. make sure the alphabet not larger than rules.keys() + halt

window.TAGSYS = function(machine, word) {
    if (!machine) return

    function sys(machine) {
        this.machine    = machine
        this.output     = []
        this.max_depth  = machine._max_depth || 100
        this.depth      = 0

        this.halt = (typeof machine.halt == 'function')
            ? machine.halt
            : function(w){ return w[0]==(machine.halt||'H') }
    }

    sys.prototype.run = function(word) {
        var c = word[0]

        ++this.depth
        this.output.push(word)

        return this.halt(word) || (this.depth == this.max_depth)
            ? this.end()
            : this.run(word.substr(this.machine.m) + this.machine.rules[c])
    }

    sys.prototype.end = function() {
        var _out = this.output
        this.depth = 0
        this.output = []
        return _out;
    }

    var s = new sys(machine)
    return word ? s.run(word) : s
};

TAGSYS.print = function(machine, word, dom) {
    var ret = '\n'
    ,   m = machine.machine.m
    ,   pad = Array(m+1).join(' ')
    ,   out = machine.run(word)

    for (var i=0; i<out.length; i++) {
        ret += Array(i+1).join(pad) + out[i] + '\n'
    }

    if (dom) dom.innerText = ret

    return ret
}


}());
