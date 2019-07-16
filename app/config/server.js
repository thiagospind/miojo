var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
//var expressSession = require('express-session');

var app = express();
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));

// app.use(expressSession({
//     secret: '9Swj3p0YaEhjmFX',
//     resave: false,
//     saveUninitialized: false
// }));

// app.use(function(req, res, next) {
//     res.locals.usuario = req.session.usuario;
//     res.locals.autorizado = req.session.autorizado;
//     next();
// });

consign({cwd: process.cwd()})
.include('/routes')
//.then('config/dbConnection.js')
.then('/controllers')
//.then('/models')
.into(app);

module.exports = app;