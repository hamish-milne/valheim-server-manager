import express from 'express'
import path from 'path'
import logger from 'morgan'

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
export default app

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
