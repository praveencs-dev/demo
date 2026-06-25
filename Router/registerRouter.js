const express=require('express');
const regcontrol=require('../Controller/registerController')
const router=express.Router();
router.post('/',regcontrol.register)
module.exports=router;