var express = require('express');
var path = require('path');

var app = express();

app.use(express.static("public"))
    .get('/jode', function (req, res) {
        res.render('jode.ejs');
    })
    .get('/jode/GroupingContent', function (req, res) {
        res.render('GroupingContent.ejs');
    })
    .get('/jode/ItemContent', function (req, res) {
        res.render('ItemContent.ejs');
    })
    .get('/jode/ItemContent/ItemConfigureModal/:pNumber', function (req, res) {
        res.render('ItemConfigureModal.ejs', {incomingNumber: req.params.pNumber});
    })
    .get('/jode/ItemContent/ItemCard/:pName/:pRating/:pIconClass/:pColor', function (req, res) {
        let params = {};
        params.itemName = req.params.pName;
        params.itemRating = req.params.pRating;
        params.iconClass = req.params.pIconClass;
        params.iconColor = req.params.pColor;
        res.render('ItemCard.ejs', params);
    })
    .use(function (req, res, next) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('The given page cannot be found!');
    })
;

app.listen(8080);