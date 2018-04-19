/* GET anemia page */

const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function (req, res) {
    res.render('anemia_add');
};

const addData = function (req, res) {
    const path = '/api/anemia';
    const postData = {
        type: req.body.type,
        name: req.body.name
    }
    const requestOptions = {
        url: apiURL.server + path,
        method: 'POST',
        json: postData
    };
    request(
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201) {
                res.redirect('/anemia');
            } else {
                res.render('error', {message: `Error adding data: ${response.statusMessage} (${response.statusCode}) `});
            }
        }
    )
};

const anemiaSolutions = function (req, res) {
    const path = '/api/anemia';
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

module.exports = {
    anemiaSolutions,
    showForm,
    addData
};