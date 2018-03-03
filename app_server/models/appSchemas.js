const mongoose = require('mongoose');

const anemiaSchema = new mongoose.Schema({type:String, name:String});
const insomniaSchema = new mongoose.Schema({type:String, name:String});
const libidoSchema = new mongoose.Schema({type:String, name:String});


mongoose.model('anemia', anemiaSchema);
mongoose.model('insomnia', insomniaSchema);
mongoose.model('libido', libidoSchema);

