const express = require('express')
const verifyToken = require('../middlewares/authMiddleware')
const router = express.Router()

const authorizeRoles= require('../middlewares/roleMiddleware')

//Only admin
router.get('/admin' ,verifyToken,authorizeRoles("admin") ,(req,res) =>{
    res.send({message: "Welcome Admin"})
})

//both admin and moderator
router.get('/moderator',verifyToken,authorizeRoles("admin" , "moderator"),(req,res) =>{
    res.send({message: "Welcome Moderator"})
})

//all can access
router.get('/user' ,verifyToken,authorizeRoles("admin" , "moderator" , "user"),(req,res) =>{
    res.send({message: "Welcome User"})
})

module.exports = router;