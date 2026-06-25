const express=require('express');
const logcontrol=require('../Controller/loginController')
const router=express.Router();
router.post('/',logcontrol.login);
module.exports=router;