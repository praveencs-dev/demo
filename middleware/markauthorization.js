const authorization=require('../Model/authorizationModel')
const { ressender} = require('../utils/globalfunctions');
 async function markauthorization(req,res,next){
    let result= await authorization.staff_autn(req.user.id);
    if(result.length!=0){
        return next();
    }
    else{
        ressender(res,401,{message:"unauthorized access"});
    }
}
module.exports=markauthorization;