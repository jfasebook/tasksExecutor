let WSpace = require ('../src/core/core.wspace.js')
let TAdd   = require ('../src/tasks/task.add.js')
let TSub   = require ('../src/tasks/task.sub.js')


let add = TAdd (WSpace)
let sub = TSub (WSpace)

function TestA () {
    add.execute ({x: 2, y: 3})
}

function TestB () {
    sub.execute ({x: 2, y: 3})
}

TestA ()
TestB ()