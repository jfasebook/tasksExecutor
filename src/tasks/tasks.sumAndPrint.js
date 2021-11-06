let sum = require ('../jobs/jobs.sum.js')
let print = require ('../jobs/jobs.print.js')


function Task (parameters) {

    let {wspace} = parameters
    
    function execute () {
        sum.execute ()
        print.execute ()
    }

    return {
        execute
    }
}

module.exports = Task