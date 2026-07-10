const jwt=require('jsonwebtoken');

const logmodel=require('../Model/loginModel');
const {ressender,validator}=require('../utils/globalfunctions');


async function login(req,res){
   var id=req.body.id;
   var password=req.body.password;
   let result = await logmodel.login(id,password)
   if(result.length==0){
        return ressender(res,401,{message:"invalid"})
   }
   else{
    var token=jwt.sign(result[0],process.env.SECRET_KEY);

    return ressender(res,201,
        {message:"login successfully",
         token
        })
   }
}
async function stafflogin(req,res){
   var id=req.body.id;
   var password=req.body.password;
   let result = await logmodel.stafflogin(id,password)
   if(result.length==0){
        return ressender(res,401,{message:"invalid"})
   }
   else{
    var token=jwt.sign(result[0],process.env.SECRET_KEY);

    return ressender(res,201,
        {message:"login successfully",
         token
        })
   }
}
async function studlogin(req,res){
   var id=req.body.id;
   var password=req.body.password;
   let result = await logmodel.studlogin(id,password)
   if(result.length==0){
        return ressender(res,401,{message:"invalid"})
   }
   else{
    var token=jwt.sign(result[0],process.env.SECRET_KEY);

    return ressender(res,201,
        {message:"login successfully",
         token
        })
   }
}

module.exports={
    login,stafflogin,studlogin
}