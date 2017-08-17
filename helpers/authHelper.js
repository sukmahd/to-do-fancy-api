'use strict'

const jwt = require('jsonwebtoken')


function auth(req,res,next){
  const token = req.headers.token
  if(token){
    // jwt.verify(token, 'YttsA', function(err, decode){
    //   console.log(decode);
    //   console.log(req.params.id);
    //   if(req.params.id == decode.id){
    //     next();
    //   }else {
    //     res.send('u dont have access to this account')
    //   }
    next()
    // })
  }else {
    res.send('anda belum login')
  }
}

module.exports = {
  auth
};
