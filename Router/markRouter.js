const markcontrol= require('../Controller/markController');
const express=require('express');
const router=express.Router();

router.get('/getmark',markcontrol.getmark);
router.post('/insertmark',markcontrol.insertmark);
router.put('/updatemark',markcontrol.updatemark);

module.exports=router;