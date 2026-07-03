const deptcontrol=require('../Controller/deptController');
const express=require('express')
const router=express.Router();
router.get('/getdept',deptcontrol.getdept);
router.post('/insertdept',deptcontrol.insertdept);
router.put('/updatedept',deptcontrol.updatedept);
router.delete('/deletedept',deptcontrol.deletedept);
module.exports=router;