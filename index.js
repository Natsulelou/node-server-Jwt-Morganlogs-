var app = require('express')();
var bodyParser = require('body-parser')
var jwt = require('express-jwt');

var port = 3200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/', jwt({
    secret: 'ngEurope rocks!',
    credentialsRequired: false,
}));

app.get('/api/test', function (req, res) {
    res.send(req.user);
});

app.post('/api/test', function (req, res) {
    res.jsonp({
        status: 200,
        data: req.body
    });
});

app.put('/api/test', function (req, res) {
    res.jsonp({
        status: 200,
        data: req.body
    });
});

app.delete('/api/test', function (req, res) {
    res.jsonp({
        status: 200,
        data: req.body
    });
});

app.listen(port, function () {
    console.log('server is running on port 3200');
});