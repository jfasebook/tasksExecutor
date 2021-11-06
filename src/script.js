const WSpace = require ('./core/core.wspace')

function Script (specification) {
    let {description} = specification

    let wspace = WSpace (description)

    function configuration() {
        wspace.save('description', description)
        wspace.save('task', specification.task)
    }

    function execution() {

    }

    return {

    }

}

module.exports = Script










