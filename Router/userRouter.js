const express=require("express");
const control=require('../Controller/userController')
const router=express.Router();
router.get('/',control.getusercontrol);
module.exports=router;