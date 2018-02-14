/* GET anemia page */
var anemiaSolutions = function(req, res){
    res.render('anemia',{
        solutions:
        [
            {type:'meat', name:'beef'},
            {type:'meat', name:'duck'},
            {type:'meat', name:'black sausage'},
            {type:'meat', name:'egg'},

            {type:'fish', name:'cod'},
            {type:'fish', name:'shrimp'},
            {type:'fish', name:'mackeret'},
            {type:'fish', name:'sardine'},
            {type:'fish', name:'tuna'},

            {type:'fruit', name:'blackcurrant'},
            {type:'fruit', name:'redcurrant'},
            {type:'fruit', name:'mango'},

            {type:'vegetable', name:'celeri stick'},
            {type:'vegetable', name:'celeriac'},
            {type:'vegetable', name:'button mushroom'},
            {type:'vegetable', name:'watercress'},
            {type:'vegetable', name:'spinach'},

            {type:'seaweed', name:'chlorella'},
            {type:'seaweed', name:'kombu'},

            {type:'else', name:'fenugreek'}            

        ]});
};
module.exports = {
    anemiaSolutions
};