function Job (parameters) {
    let {name}   = parameters
    let {wspace} = parameters
    let {data}   = wspace.get(keyData())
    let {x}      = data
    let {y}      = data
    
    function keyData() {
        return `${name}.data`
    }

    function keyResult() {
        return`${name}.result`
    }

    function execute () {
        console.log (`This is a job1 ${x} + ${y}`)
    }

    return {
        execute
    }
}


module.exports = Job