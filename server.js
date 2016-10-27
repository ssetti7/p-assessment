/**
 * Created by Carlos Andres on 10/25/2016.
 */
var express = require('express');
var app = new express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static('dist'));

app.listen('3000', ()=> {
    console.log('app start at 3000');
});
