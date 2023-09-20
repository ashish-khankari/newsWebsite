const User = require("../config/userSchema")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const express = require("express")

const router = express.Router()

router.post("/register", async(req, res)=>{
    const {name, email, password} = req.body
    const user = User.findOne({email})

    if(user){
        return res.json({message: "User already Registered"})
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = new User({name, email, hashPassword})

    newUser.save()

    res.json({message: "User Succesfully Created"})
})


module.exports = router