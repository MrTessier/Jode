var express = require('express');
var path = require('path');
const Sequelize = require('sequelize');

console.log("Starting jode application");
var app = express();
const sequelize = new Sequelize('LMS', 'mylocalSeanMcintire', 'PASSWORD', {
    host: '66.59.109.170',
    dialect: 'mssql'
});

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
    .get('/jode/Test', function (req, res) {
        let jsonData;
        console.log('Creating /jode/Test view.');

        sequelize
            .query("SELECT * FROM AspNetUsers")
            .then(myTableRows => {
                console.log('Query Finished');
                jsonData = JSON.stringify(myTableRows); // Convert result to JSON string.
                let params = {};
                params.jsonUsers = jsonData;
                res.render('Test.ejs', params);
            })
    })
    .use(function (req, res, next) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send('The given page cannot be found!');
    })
;

app.listen(8080);