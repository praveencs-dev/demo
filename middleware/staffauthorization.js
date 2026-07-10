const authorization=require('../Model/authorizationModel')
const { ressender} = require('../utils/globalfunctions');
 async function staffauthorization(req,res,next){
    let result= await authorization.staff_autn(req.user.id);
    if(result.length==0){
        let result1=await authorization.admin_autn(req.user.id);
        if(result1.length==0){
            return ressender(res,401,{message:"unauthorized access"});
        }
        else{
            return next()
        }
    }
    else{
        
        return next();
    }
}
module.exports=staffauthorization;