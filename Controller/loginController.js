const jwt=require('jsonwebtoken')

const model=require('../Model/userModel');


async function login(req,res){
   var name=req.body.name;
   var password=req.body.password;
   let result = await model.Login(name,password)
   if(result.length==0){
        return resSender(res,401,{message:"invalid"})
   }
   else{
    var token=jwt.sign(result[0],process.env.SECRET_KEY);

    return resSender(res,201,
        {message:"login successfully",
         token
        })
   }
}

module.exports={
    login
}