const usermodel=require("../Model/userModel");
async function register(req,res){
    let {name,email,age,password,role}=req.body;
    await usermodel.register(name,email,age,password,role);
    ressender(res,201,{message:"registered successfully"});
   

    
}
module.exports={register}