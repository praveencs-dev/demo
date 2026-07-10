const express=require('express');
const logcontrol=require('../Controller/loginController')
const router=express.Router();
router.post('/userlogin',logcontrol.login);
router.post('/stafflogin',logcontrol.stafflogin);
router.post('/studentlogin',logcontrol.studlogin)
module.exports=router;