const express=require("express");
const studcontrol=require('../Controller/studController');

const router=express.Router();
router.get('/getstudent',studcontrol.getstud);
router.post('/insertstudent',studcontrol.insertstud);
router.get('/allocated_subject',studcontrol.allocated_subject)
module.exports=router;