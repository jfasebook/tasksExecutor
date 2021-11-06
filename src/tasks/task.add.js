let WSpace = require ('../core/core.wspace.js')
let JAdd   = require ('../jobs/job.add.js')
let JPrint = require ('../jobs/job.print.js')


let add   = JAdd   (WSpace)
let print = JPrint (WSpace)

function TAdd (WSpace) {

    function execute (ctx) {
          add.execute (ctx)
        print.execute ()
    }

    return { execute }
}


module.exports = TAdd

