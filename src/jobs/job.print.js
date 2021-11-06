const RESULT = 'WSpace.Result'

function JPrint (WSpace) {

    function execute (ctx) {
        let r = WSpace.get (RESULT)

        console.log (r)
    }

    return { execute }
}


module.exports = JPrint