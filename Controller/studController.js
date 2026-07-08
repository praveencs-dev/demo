const studmodel = require('../Model/studModel');
const {ressender,validator}=require('../utils/globalfunctions');


async function getstud(req, res) {
    let data = await studmodel.getstud();
    return ressender(res, 200, data);
}

async function insertstud(req, res) {
    var student = req.body;
    
    var student_needs = {
        name: /^[a-zA-Z\s]+$/,
        year: /^\d{1}$/,
        start_year: /^\d{4}$/,
        end_year: /^\d{4}$/,
        dept_id: /^\d/,
        dob: /^\d{4}-\d{2}-\d{2}/,
        email: /f/,
        phone: /^\d{10}/,
        address: /\w+/
    }

    let valid = validator(student_needs, student)

    if (valid == true) {
        let result = await studmodel.insertstud(student);
        if (result == "inserted") {
            return ressender(res, 200, { message: result });
        }
        else {
            return ressender(res, 400, { message: result });
        }
    }
    else {
        return ressender(res, 400, { message: valid.message })
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
    allocated_subject
}