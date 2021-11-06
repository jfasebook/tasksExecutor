const specification = {
    'description': 'Example specification',
    'task': {
        'name': 'sumAndPrint',
        'jobs': [
            {
                'name': 'sum',
                'data': {
                    'x' : 1,
                    'y' : 2
                }
            },
            {
                'name' : 'print'
            }
        ]
    }
}

let Script = require('./src/script.js')

let script = Script(specification)

script.execute()