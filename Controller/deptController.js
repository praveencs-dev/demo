const { ressender, validator } = require('../utils/globalfunctions');
const deptmodel = require('../Model/deptModel');
async function getdept(req, res) {
    let result = await deptmodel.getdept()
    return ressender(res, 200, result)

}
async function insertdept(req, res) {
    let dept = req.body;
    let dept_needs = {
        Dept_name: /^[a-zA-Z\s]+$/,
        course_duration: /^\d+/,
        duration_type: /^[a-zA-Z]+$/
    }
    let valid = validator(dept_needs,dept)
    if (valid == true) {
        let result = await deptmodel.insertdept(dept);
         if (result.rowCount) {
            ressender(res, 200, { command: result.command, rowcount: result.rowCount,status:"inserted"})
        }
        else {
            ressender(res, 400, { message: result })
        }
    }
    else{
        return ressender(res,400,{message:valid})
    }
}
async function updatedept(req, res) {
    let dept = req.body;
    let result = await deptmodel.updatedept(dept);
    if (result.rowCount == 1) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "updated" });
    }
    else if (result.rowCount == 0) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "department not founded" });
    }
    else {
        ressender(res, 400, { message: result });
    }
}
async function deletedept(req, res) {
    let{id}=req.body;
    let result= await deptmodel.deletedept(id);
    if(!result.rowCount==0){
        ressender(res,200,{command:result.command,rowcount:result.rowCount})
    }
    else{
        ressender(res,400,{message:"department not founded"})
    }
}
module.exports = {
    getdept,
    insertdept,
    updatedept,
    deletedept
}