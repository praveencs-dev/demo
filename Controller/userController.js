const model=require('../Model/userModel')
global.resSender=(res,statuscode,message)=>{
    res.status(statuscode).json(message);
}
 async function getusercontrol(req,res){
    let data= await model.getUser();
    return resSender(res,200,data);
}
module.exports={
    getusercontrol
}