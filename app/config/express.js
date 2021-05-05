const express = require('express')
const teacherController = require('../controllers/teacher')
const courseController = require('../controllers/course')
class Express{
    constructor() {
        this.express = express();
        
    }


    listen(){
        this.express.get('/api/query/teacher',teacherController.list)
        this.express.post('/api/create/teacher',teacherController.create)

        this.express.get('/api/query/course',courseController.list)
        this.express.post('/api/create/course',courseController.create)

        this.express.listen(3000)
    }

}module.exports = Express;

