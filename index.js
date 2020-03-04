var app = require('express')();
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var morgan = require('morgan');

var port = 3200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api/', jwt({
    secret: 'ngEurope rocks!',
    credentialsRequired: false,
}));

morgan.token('user', function (req, res) {
    return req.user ? req.user.username: 'guest'
})

app.use(morgan(':date[web] user=:user method=:method path=:url status=:status response-time=:response-time ms content-length=:res[content-length]'))

app.get('/api/test', function (req, res) {
    res.send('this is get method');
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