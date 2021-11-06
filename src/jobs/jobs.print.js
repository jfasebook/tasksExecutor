function Job (parameters) {
    let {data} = parameters
    let {x} = data
    let {y} = data
    function execute () {
        console.log (`This is a job1`)
        let result = x + y
        console.log(result)
    }

    return {
        execute
    }
}


module.exports = Job