let wspace  = {}
function Helper (app) {
    wspace[app] = {}

    function save(key, value) {
        wspace[app][key] = value
    }

    function get(key) {
        return wspace[app][key]
    }

    return {
        save,
        get
    }
}

module.exports = Helper