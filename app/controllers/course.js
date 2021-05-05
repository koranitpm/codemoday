
const Courses = require('../models/courses')
module.exports = {

    create(req, res){
        return Courses
        .create({
          course_name: req.body.course_name,
          course_description: req.body.course_description
        })
        .then((courses) => res.status(201).send(courses))
        .catch((error) => res.status(400).send(error));
    },

    list(req, res) {
      return Courses
        .all()
        .then(courses => res.status(200).send(courses))
        .catch(error => res.status(400).send(error));
    }

}

