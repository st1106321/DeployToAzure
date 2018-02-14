/* GET insomnia page */
var insomniaSolutions = function(req, res){
    res.render('insomnia',{
        solutions:
        [
            {type:'cereal', name:'oats'},
            {type:'liquid', name:'milk'},
            {type:'plant', name:'basil'},
            {type:'plant', name:'lettuce'}

        ]});
};
module.exports = {
    insomniaSolutions
};