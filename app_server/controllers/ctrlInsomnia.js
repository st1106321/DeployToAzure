/* GET insomnia page */

const request = require('request');
const apiURL = require('./apiURLs');

const insomniaSolutions = function (req, res) {
    const path = '/api/ctrlApiInsomnia';
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
                res.render('insomnia', {insomnia: body});
            }
        }
    )
};

// var insomniaSolutions = function(req, res){
//     res.render('insomnia',{
//         solutions:
//         [
//             {type:'cereal', name:'oats'},
//             {type:'liquid', name:'milk'},
//             {type:'plant', name:'basil'},
//             {type:'plant', name:'lettuce'}

//         ]});
// };
module.exports = {
    insomniaSolutions
};