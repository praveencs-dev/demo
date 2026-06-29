const model=require("../Model/userModel");
async function register(req,res){
    let {name,email,age,password,role}=req.body;
    await model.Register(name,email,age,password,role);
    resSender(res,201,{message:"registered successfully"});
   

    
}
module.exports={register}