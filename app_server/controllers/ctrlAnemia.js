/* GET anemia page */

const request = require('request');
const apiURL = require('./apiURLs');

const anemiaSolutions = function (req, res) {
    const path = '/api/ctrlApiAnemia';
    const requestOptions = {
        url: apiURL.server + path,
        method: 'GET',
        json: {},
        qs: {}
    };
    request (
        requestOptions,
        function (err, response, body) {
            if (err) {
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200) {
                res.render('error', {message: `Error accessing API ${response.statusMessage} ( ${response.statusCode} )`});
            } else if (!(body instanceof Array)) {
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length) {
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('anemia', {anemia: body});
            }
        }
    )
};

// var anemiaSolutions = function(req, res){
//     res.render('anemia',{
//         solutions:
//         [
//             {type:'meat', name:'beef'},
//             {type:'meat', name:'duck'},
//             {type:'meat', name:'black sausage'},
//             {type:'meat', name:'egg'},

//             {type:'fish', name:'cod'},
//             {type:'fish', name:'shrimp'},
//             {type:'fish', name:'mackeret'},
//             {type:'fish', name:'sardine'},
//             {type:'fish', name:'tuna'},

//             {type:'fruit', name:'blackcurrant'},
//             {type:'fruit', name:'redcurrant'},
//             {type:'fruit', name:'mango'},

//             {type:'vegetable', name:'celeri stick'},
//             {type:'vegetable', name:'celeriac'},
//             {type:'vegetable', name:'button mushroom'},
//             {type:'vegetable', name:'watercress'},
//             {type:'vegetable', name:'spinach'},

//             {type:'seaweed', name:'chlorella'},
//             {type:'seaweed', name:'kombu'},

//             {type:'else', name:'fenugreek'}            

//         ]});
// };
module.exports = {
    anemiaSolutions
};