const { ressender, validator } = require('../utils/globalfunctions');
const deptmodel = require('../Model/deptModel');
async function getdept(req, res) {
    let result = await deptmodel.getdept()
    return ressender(res, 200, result)

}
async function insertdept(req, res) {
    let dept = req.body;
    let dept_needs = {
        name: /^[a-zA-Z\s]+$/,
        course_duration: /^\d+/,
        duration_type: /^[a-zA-Z]+$/
    }
    let valid = validator(dept_needs, dept)
    if (valid == true) {
        let result = await deptmodel.insertdept(dept);
        if (result == "inserted") {
            return ressender(res, 200, { message: result });
        }
        else {
            return ressender(res, 400, { message: result });
        }
    }
    else{
        return ressender(res,400,{message:valid})
    }
}
async function updatedept(req, res) {
    let dept = req.body;
    let result = await deptmodel.updatedept(dept);
    if (result == "updated") {
        return ressender(res, 200, { message: result })
    }
    else {
        return ressender(res, 400, { message: result })
    }
}
async function deletedept(req, res) {
    let{id}=req.body;
    let result= await deptmodel.deletedept(id);
     return ressender(res, 200, { message: result })

}
module.exports = {
    getdept,
    insertdept,
    updatedept,
    deletedept
}