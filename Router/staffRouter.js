const staffcontrol=require('../Controller/staffController');
const express=require('express');
const staffauthorization = require('../middleware/staffauthorization');
const adminauthorization = require('../middleware/adminauthorization');
const router=express.Router();

router.get('/getstaff',staffcontrol.getstaff);
router.post('/insertstaff',adminauthorization,staffcontrol.insertstaff);
router.put('/updatestaff',staffauthorization,staffcontrol.updatestaff);
router.delete('/deletestaff',staffauthorization,staffcontrol.deletestaff);


module.exports=router

