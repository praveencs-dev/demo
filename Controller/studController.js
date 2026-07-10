const studmodel = require('../Model/studModel');
const {ressender,validator}=require('../utils/globalfunctions');


async function getstud(req, res) {
    let data = await studmodel.getstud();
    return ressender(res, 200, data);
}

async function insertstud(req, res) {
    var student = req.body;
    
   

        let result = await studmodel.insertstud(student);
        if (result == "inserted") {
            return ressender(res, 200, { message: result });
        }
        else {
            return ressender(res, 400, { message: result });
        }

}

async function updatestud(req, res) {
    let stud= req.body;
    let result = await studmodel.updatestud(stud);
    if (result.rowCount == 1) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "updated" });
    }
    else if (result.rowCount == 0) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "student not founded" });
    }
    else {
        ressender(res, 400, { message: result });
    }

}
async function allocated_subject(req,res){
    let {semester}=req.body;
    let result=await studmodel.allocated_subject(semester);
    return ressender(res, 400,result)
}
module.exports = {
    getstud,
    insertstud,
    updatestud,
    allocated_subject
}