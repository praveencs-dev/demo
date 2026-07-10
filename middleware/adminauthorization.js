const authorization=require('../Model/authorizationModel')
const { ressender} = require('../utils/globalfunctions');
 async function adminauthorization(req,res,next){
    
        let result=await authorization.admin_autn(req.user.id);
        if(result.length==0){
            return ressender(res,401,{message:"unauthorized access"});
        }
        else{
            return next()
        }
}
module.exports=adminauthorization;