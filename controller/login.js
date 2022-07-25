const Users = require('../models/login')
const mongoose = require('mongoose')

function login(req, res, next){
    let email= req.body.email;
    let password =req.body.password;
    let user = new Users({email,password})
    Users.find({}).then((data =>{
        const foundUser = data.find((data)=>{
            return email == data.email
        })
        if(foundUser){
            if(user.password == foundUser.password){
                res.send({message:"loggedIn", data:foundUser})
            }else{
                res.status(403).send({error:"Incorrect Password"})
            }
        }else{
            res.status(403).send({error:"Incorrect User"})
        }
    }))
}

module.exports.login = login