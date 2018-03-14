const mongoose = require('mongoose');

const libido = mongoose.model('libido');

const libidoSolutions = function (req, res) {
    libido.find({}, function (err, libidoRemedies) {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(libidoRemedies);
        }
    })
};

const addLibidoSolution = function (req, res) {
    libido.create(req.body, function (err, libidoRemedy) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(libidoRemedy);
        }
    })
};

module.exports = {
    libidoSolutions,
    addLibidoSolution
};