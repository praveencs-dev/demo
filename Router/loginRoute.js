const express=require('express');
const logcontrol=require('../Controller/loginController')
const router=express.Router();
router.post('/userlogin',logcontrol.login);
router.post('/stafflogin',logcontrol.stafflogin);
module.exports=router;