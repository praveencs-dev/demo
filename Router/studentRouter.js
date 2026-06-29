const express=require("express");
const control=require('../Controller/studController');

const router=express.Router();
router.get('/',control.getstud);
router.post('/',control.stud_insert);
module.exports=router;