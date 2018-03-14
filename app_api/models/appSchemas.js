const mongoose = require('mongoose');

const anemiaSchema = new mongoose.Schema({type:String, name:String});
const insomniaSchema = new mongoose.Schema({type:String, name:String});
const libidoSchema = new mongoose.Schema({type:String, name:String});


mongoose.model('anemia', anemiaSchema, 'anemia');
mongoose.model('insomnia', insomniaSchema, 'insomnia');
mongoose.model('libido', libidoSchema, 'libido');

