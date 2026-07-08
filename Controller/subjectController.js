const submodel = require('../Model/subjectModel');
const { validator, ressender } = require('../utils/globalfunctions');
async function getsub(req, res) {
    let result = await submodel.getsub();
    ressender(res, 200, result);
}
async function insertsub(req, res) {
    let subject = req.body;

    let sub_needs = {
        name:/^[a-zA-Z\s]+$/,
        semester:/\d{1}/,
        type:/^[a-zA-Z]+/
    };

    let valid = validator(sub_needs, subject);
    if (valid == true) {
        let result = await submodel.insertsub(subject);
        if (result.rowCount) {
            ressender(res, 200, {command:result.command,rowcount:result.rowCount,staus:"inserted"});
        }
        else {
            ressender(res, 400, { message: result });
        }
    }
    else {
        ressender(res, 400, { valid })
    }
}
async function updatesub(req, res) {
    let subject = req.body;
    let result = await submodel.updatesub(subject);
    if (result.rowCount==1) {
        ressender(res, 200, {command:result.command,rowcount:result.rowCount,status:"updated"});
    }
    else if(result.rowCount==0){
        ressender(res, 200, {command:result.command,rowcount:result.rowCount,status:"subject not founded"});
    }
    else {
        ressender(res, 400, { message: result });
    }
}
async function deletesubject(req,res){
    let {id}=req.body;
    let result= await submodel.deletesubject(id);
    if(!result.rowCount==0){
        ressender(res,200,{command:result.command,rowcount:result.rowCount})
    }
    else{
        ressender(res,400,{message:"subject not founded"})
    }
}
module.exports={
    getsub,
    insertsub,
    updatesub,
    deletesubject
}