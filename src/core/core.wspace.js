function WSpace () {

    let wspace = new Map ()

    let get = wspace.get.bind (wspace)
    let set = wspace.set.bind (wspace)

    return {
        get,
        set
    }
}


module.exports = WSpace ()