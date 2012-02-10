A *tag* system, not a tag*ing* system.
Like this: http://en.wikipedia.org/wiki/Tag_system

tl;dr
====

```js
var simple = TAGSYS({
     m: 2

    ,rules: {
         a: 'ccbaH'
        ,b: 'cca'
        ,c: 'cc'
    }
})

simple.run('baa')
```

or

```js
var collatz = TAGSYS({
     _max_depth: 300

    ,m: 2 
    ,halt: function(w){ return w.length <= 1 }

     ,rules: {
         a: '.,'
        ,'.': 'a'
        ,',': 'aaa'
    }
})

collatz.run('aaaaaaa')
```


Full API
====

A machine
----
A machine is a simple object w/ these properties:
    - `m`: number of characters to delete on each repetition (tag machines are also called "m-tag machines")
    - `rules`: a simple object where each key is a character in the alphabet, and each value is a word to add to the end of the queue
    - `halt` (optional - default: `"H"`): either a string indicating the halt character, or a function whose returning `true` indicates we should halt
    - `_max_depth` (optional): By default, the machine will only loop 100 times before halting. Set this to more to loop more (or less).

Running/Printing
----
tagsys.js exposes one global: `TAGSYS`

`TAGSYS(machine, [word])` 
    - if `word` is included, will run the machine and return the output as an array
    - if not, will return an object with one method: `run(word)` which will run the machine against `word`


`TAGSYS.print(machine, word, [dom])`
    - runs `machine.run(word)` and returns a pretty-printed result
    - if `dom` is included, will set `dom`'s innerText before returning
    


