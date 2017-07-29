'use strict'

const express = require('express')
const app = express()


app.get('/', function(req,res){
  res.send('hello its me')
})


app.listen(3000)
