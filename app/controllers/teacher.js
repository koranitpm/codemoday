
const Teacher = require('../models/teacher')
module.exports = {

    create(req, res){
        return Teacher
        .create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          date_of_birth: req.body.date_of_birth
        })
        .then((teacher) => res.status(201).send(teacher))
        .catch((error) => res.status(400).send(error));
    },

    list(req, res) {
      return Teacher
        .all()
        .then(teacher => res.status(200).send(teacher))
        .catch(error => res.status(400).send(error));
    }

}

