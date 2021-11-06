const ADD = 'WSpace.Result'

function JAdd (WSpace) {

    function execute (ctx) {
        let {x} = ctx
        let {y} = ctx

        WSpace.set (ADD, x + y)
    }

    return { execute }
}


module.exports = JAdd