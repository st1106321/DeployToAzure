/* GET libido page */
var libidoSolutions = function(req, res){
    res.render('libido',{
        solutions:
        [
            {type:'condiment', name:'cinnamon'},
            {type:'condiment', name:'ginger'},
            {type:'condiment', name:'pepper'},
            {type:'condiment', name:'savory'},

            {type:'vegetable', name:'celeri stick'},
            {type:'vegetable', name:'celeriac'},
            
            {type:'molluscs', name:'oyster'},

            {type:'fruit', name:'pomegranate'},
            
            {type:'else', name:'cocoa'},
            {type:'else', name:'chocolate'}
        ]});
};
module.exports = {
    libidoSolutions
};