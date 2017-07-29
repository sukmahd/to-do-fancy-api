'use strict'

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/registerHelpers')

function signup(req,res){
  const key = helper.randomKey();
  const pass = helper.hash(req.body.password, key)
  User.create({
    name: req.body.name,
    password: pass,
    email: req.body.email
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err =>{
    res.send(err)
  })
}

function signin(req, res){
  User.findOne({
    email: req.body.email
  })
  .then(row=>{
    const key = row.key
    const pass = helper.hash(req.body.password, key )
    if(row.password == pass){
      const token = jwt.sign({
        name:row.name,
        email: row.email,
        task_list: row.task_list
      }, 'YttsA')
      req.headers.token = token
      res.send(token)
    }else {
      res.send('password salah')
    }
  })
  .catch(err =>{
    res.send(err)
  })
}

function addTask(req, res){
  User.update({
    _id: req.params.id
  },{
    $push:{
      task_list: req.body.task_id
    }
  })
}

function removeTask(req, res){

}

function showTask(req, res){
  User.findOne({
    email:req.body.email
  })
  .populate('task_list')
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  signup,
  addTask,
  signin,
  removeTask,
  showTask
};
