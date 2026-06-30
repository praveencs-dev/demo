const express=require("express");
const studcontrol=require('../Controller/studController');

const router=express.Router();
router.get('/getstudent',studcontrol.getstud);
router.post('/insertstudent',studcontrol.insertstud);
module.exports=router;