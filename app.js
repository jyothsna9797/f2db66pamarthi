var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pastry = require("./models/pastry");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pastryRouter = require('./routes/pastry');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pastry', pastryRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB() {
  // Delete everything 
  await pastry.deleteMany();

  let instance1 = new
    pastry({
      pastry_flavour: "Red velvet", 
      calories: 10,
      pastry_shape: "circle"
    });
    let instance2 = new
    pastry({
      pastry_flavour: "Choclate", 
      calories: 23.4,
      pastry_shape: "Rectangle"
    });
    let instance3 = new
    pastry({
      pastry_flavour: "Strawberry", 
      calories: 23,
      pastry_shape: "Square"
    });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
}

let reseed = true;
if (reseed) { recreateDB(); }

module.exports = app;
