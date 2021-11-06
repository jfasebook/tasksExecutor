module.export = ({
    description : 'Example specification',
    tasks       : [{
        name : 'task.test.get',
        ctx  : { projectId: 'pr000651' }
    }, {
        name : 'task.test.execute',
        ctx  : { token: '12345' }
    }]
})