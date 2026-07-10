const deptcontrol=require('../Controller/deptController');
const express=require('express');
const adminauthorization = require('../middleware/adminauthorization');
const router=express.Router();
router.get('/getdept',deptcontrol.getdept);
router.post('/insertdept',adminauthorization,deptcontrol.insertdept);
router.put('/updatedept',adminauthorization,deptcontrol.updatedept);
router.delete('/deletedept',adminauthorization,deptcontrol.deletedept);
module.exports=router;