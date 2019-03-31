var express = require('express');
var path = require('path');

var app = express();

var dir = path.join(__dirname, 'public');

app.use(express.static(dir));

app.get('/jode', function(req, res) {
    res.render('jode.ejs');
});

app.get('/jode/GroupingContent', function(req, res) {
    res.render('GroupingContent.ejs');
});


app.listen(8080);