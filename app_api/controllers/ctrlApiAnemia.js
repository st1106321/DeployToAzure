const mongoose = require('mongoose');

const anemia = mongoose.model('anemia');

const anemiaSolutions = function (req, res) {
    anemia.find({}, function (err, anemiaRemedies) {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(anemiaRemedies);
        }
    })
};

const addAnemiaSolution = function (req, res) {
    anemia.create(req.body, function (err, anemiaRemedy) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(anemiaRemedy);
        }
    })
};

module.exports = {
    anemiaSolutions,
    addAnemiaSolution
};