var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
let productsRouter = require('./routes/products');
const db = require("./database/models");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret:"Mensaje secreto",
                 resave:false,
                 saveUninitialized:true}));

// Antes de las rutas. Dejar disponible datos de sessión para todas las vistas
app.use(function(req, res, next){ 
  if(req.session.user != undefined){
    res.locals.user = req.session.user;    
    return next();
  } 
  return next(); //Clave para que el proceso siga adelante.  
})

//Gestionar la coockie.
app.use(function(req, res, next){
  if(req.cookies.userId != undefined && req.session.user == undefined){
    let idDeLaCookie = req.cookies.userId;
    
    db.User.findByPk(idDeLaCookie)
    .then( user => {     
      req.session.user = user; 
      res.locals.user = user; 
      return next();
    })
    .catch( e => {console.log(e)})
  } else {
    return next();
  }
});

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/', authRouter);

app.use('/register/store', authRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
