'use strict'

const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-fancy-api')

const search = require('./routers/search')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());

const Task = require('./routers/task')
const User = require('./routers/user')

app.get('/', function(req,res){
  res.send('hello its me')
})


app.listen(3000)
