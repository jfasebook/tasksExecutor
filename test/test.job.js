let WSpace = require ('../src/core/core.wspace.js')
let JAdd   = require ('../src/jobs/job.add.js')
let JSub   = require ('../src/jobs/job.sub.js')
let JPrint = require ('../src/jobs/job.print.js')


let add   = JAdd   (WSpace)
let sub   = JSub   (WSpace)
let print = JPrint (WSpace)

function TestA () {
      add.execute ({x: 2, y: 3})
    print.execute ()
}

function TestB () {
      sub.execute ({x: 2, y: 3})
    print.execute ()
}

TestA ()
TestB ()