var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

var index = require('./links/index');
var empls = require('./links/empls');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/empls', empls);

app.listen(4500, function(){
    console.log('Server started on port 4500');
});