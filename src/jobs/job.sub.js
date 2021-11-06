const SUB = 'WSpace.Result'

function JSub (WSpace) {

    function execute (ctx) {
        let {x} = ctx
        let {y} = ctx

        WSpace.set (SUB, x - y)
    }

    return { execute }
}


module.exports = JSub