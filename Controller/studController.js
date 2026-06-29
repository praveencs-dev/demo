const model=require('../Model/userModel')
global.resSender=(res,statuscode,message)=>{
    res.status(statuscode).json(message);
}
 async function getstud(req,res){
    let data= await model.getStud();
    return resSender(res,200,data);
}
async function stud_insert(req,res){
    let student=req.body;
    await model.Stud_insert(student);
    return resSender(res,200,{message:"inserted"})

}


module.exports={
    getstud,
    stud_insert
}