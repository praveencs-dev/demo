const express=require("express");
const studcontrol=require('../Controller/studController');
const studauthorization = require("../middleware/studauthorization");
const adminauthorization = require("../middleware/adminauthorization");

const router=express.Router();
router.get('/getstudent',studcontrol.getstud);
router.post('/insertstudent',adminauthorization,studcontrol.insertstud);
router.put('/updatestudent',studauthorization,studcontrol.updatestud)
router.get('/allocated_subject',studcontrol.allocated_subject)
module.exports=router;