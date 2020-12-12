const express = require("express");
const router = express. Router();

const AuthController = require("../controllers/AuthController")





/*
@route POST /api/auth/login
@desc Login endpoint
@access private- accountu olanlar login olabliir. 
*/
router.post("./login", (req,res) =>{
    // TODO: Auth
    // TODO: Login func.
    res.send("Login Completed")
})

module.exports = router;