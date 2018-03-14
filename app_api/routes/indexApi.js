const express = require('express');
const router = express.Router();

/* Declaring the controllers*/
const ctrlApiAnemia = require('../controllers/ctrlApiAnemia');
const ctrlApiInsomnia = require('../controllers/ctrlApiInsomnia');
const ctrlApiLibido = require('../controllers/ctrlApiLibido');

/* GET pages */

// Route for anemia API
router
    .route('/anemia')
    .get(ctrlApiAnemia.anemiaSolutions)
    .post(ctrlApiAnemia.addAnemiaSolution);

// Route for insomnia API
router
    .route('/insomnia')
    .get(ctrlApiInsomnia.insomniaSolutions)
    .post(ctrlApiInsomnia.addInsomniaSolution);

router
    .route('/libido')
    .get(ctrlApiLibido.libidoSolutions)
    .post(ctrlApiLibido.addLibidoSolution);

module.exports = router;
