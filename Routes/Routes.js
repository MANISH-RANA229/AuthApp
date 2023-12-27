const express = require("express");
const router = express.Router();

const {signup,login} = require("../Controller/Signup");
const {auth, isAdmin,isUser,isBoth} = require("../Auth/Auth");



router.post("/login", login);
router.post("/signup", signup);




//testing protected routes for single middleware
router.get("/test", auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});

 //Protected Route
router.get("/Admin", auth, isAdmin, (req,res) => {
     res.json({
         success:true,
         message:'Welcome to the Protected route for Admin',
     });
 } );

 router.get("/user", auth, isUser, (req,res) => {
     res.json({
         success:true,
         message:'Welcome to the Protected route for user',
     });
 });

module.exports = router;

