let WSpace = require ('../core/core.wspace.js')
let JSub   = require ('../jobs/job.sub.js')
let JPrint = require ('../jobs/job.print.js')


let sub   = JSub   (WSpace)
let print = JPrint (WSpace)

function TSub (WSpace) {

    function execute (ctx) {
          sub.execute (ctx)
        print.execute ()
    }

    return { execute }
}


module.exports = TSub

