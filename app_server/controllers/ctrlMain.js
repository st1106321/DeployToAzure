const index = function (req, res) {
    res.render('index', {title: 'Static MVC'});
};

module.exports = {
    index
};