const staffcontrol=require('../Controller/staffController');
const express=require('express');
const router=express.Router();

router.get('/getstaff',staffcontrol.getstaff);
router.post('/insertstaff',staffcontrol.insertstaff);
router.put('/updatestaff',staffcontrol.updatestaff);
router.delete('/deletestaff',staffcontrol.deletestaff);


module.exports=router

