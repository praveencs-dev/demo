const { ressender} = require('../utils/globalfunctions');
function markauthorization(req,res,next){
    if(req.user.role=="teaching"){
        return next();
    }
    else{
        ressender(res,401,{message:"unauthorized access"});
    }
}
module.exports=markauthorization;