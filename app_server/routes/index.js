const express = require('express');
const router = express.Router();

/* Declaring the controllers*/
const ctrlMain = require('../controllers/ctrlMain');
const ctrlAnemia = require('../controllers/ctrlAnemia');
const ctrlInsomnia = require('../controllers/ctrlInsomnia');
const ctrlLibido = require('../controllers/ctrlLibido');

/* GET pages */

router.get('/', ctrlMain.index);
router.get('/anemia', ctrlAnemia.anemiaSolutions);
router.get('/insomnia', ctrlInsomnia.insomniaSolutions);
router.get('/libido', ctrlLibido.libidoSolutions);

router
    .route('/anemia/add')
    .get(ctrlAnemia.showForm)
    .post(ctrlAnemia.addData);


module.exports = router;
