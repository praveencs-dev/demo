const model=require("../Model/userModel");
async function register(req,res){
    let {name,email,age,password,role}=req.body;
    let result=await model.Register(name,email,age,password,role);
    if(result=="successful"){
        resSender(res,201,{result})
    }
    else{
        resSender(res,500,{result})
    }

    
}
module.exports={register}