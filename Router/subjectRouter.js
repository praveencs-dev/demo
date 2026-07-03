const subcontrol=require('../Controller/subjectController');
const express=require('express');
const router=express.Router();

router.get('/getsubject',subcontrol.getsub);
router.post('/insertsubject',subcontrol.insertsub);
router.put('/updatesubject',subcontrol.updatesub);
router.delete('/deletesubject',subcontrol.deletesubject)

module.exports=router;