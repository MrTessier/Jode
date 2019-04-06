var express = require('express');
var path = require('path');

var app = express();

app.use(express.static("public"));

app.get('/jode', function(req, res) {
    res.render('jode.ejs');
});

app.get('/jode/GroupingContent', function(req, res) {
    res.render('GroupingContent.ejs');
});

app.get('/jode/ItemContent', function (req, res) {
    res.render('ItemContent.ejs');
});

app.get('/jode/ItemContent/ItemConfigureModal', function (req, res) {
    res.render('ItemConfigureModal.ejs');
});


app.listen(8080);