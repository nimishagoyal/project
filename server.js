/**
 * Created by nimishagoyal on 19/07/17.
 */

var express = require('express');
var app = express();
var filesystem = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var sql = require('./db');
var list = require('./list');
var port = 4000|| process.env.port;

app.use('/', express.static('public_static'));
var obj;

app.get('/all', function (req,res) {
    filesystem.readFile('list.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.send(obj);
});
});


app.post('/bars', function (req,res) {
    filesystem.readFile('list-detail.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        var id=req.body.id;
        console.log("id = "+id);
        console.log(obj[id]);
        res.send(obj[id]);
    });
});

app.listen(port, function (response, err) { //process.env.port - process is heroku, which port is available in its environment,
    if(err) throw err;
    console.log('Server is running on port 4000');

});
