const UserModel = require('../model/User')
const jwt = require('jsonwebtoken')

const SERVER_KEY = "9lkjdsfaij;dsfklj dasfkjds fl;kadfsl kjsdf"

exports.checkAdminAuth = async (req, res)=>{
   let {email, password} = req.body
   let userData = await UserModel.findOne({email, password, userType:"ADMIN"})
   if(userData != null){
      //user found
      let {_id, userType} = userData
      let authtoken = jwt.sign({id:_id, userType:userType}, SERVER_KEY)
      res.send({status:"OK", data:{authtoken}})
   }else{
      //user not found
      res.send({status:"ERR", "msg":"Invalid username or password"})
   }

}


exports.registerUser = async (req, res)=>{

   let {email, password, username} = req.body
   let newUser = new UserModel({email, password, username, userType:"USER"})
   newUser.save().then(()=>{
      res.send({status:"OK"})
   }).catch(err=>{
      
      res.send({status:"ERR", err})
   })
  

}