const mongoose = require('mongoose');

const insomnia = mongoose.model('insomnia');

const insomniaSolutions = function (req, res) {
    insomnia.find({}, function (err, insomniaRemedies) {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(insomniaRemedies);
        }
    })
};

const addInsomniaSolution = function (req, res) {
    insomnia.create(req.body, function (err, insomniaRemedy) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(insomniaRemedy);
        }
    })
};

module.exports = {
    insomniaSolutions,
    addInsomniaSolution
};