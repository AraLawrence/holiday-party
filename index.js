var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

var mongoose = require('mongoose');
var Remark = require('./models/remark');
var Affirm = require('./models/affirm');
mongoose.connect('mongodb://localhost/holiday-party');

app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/remark', require('./controllers/remark'));
app.use('/api/affirm', require('./controllers/affirm'));
app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(3000);