const model = require('../Model/userModel')
global.resSender = (res, statuscode, message) => {
    res.status(statuscode).json(message);
}
async function getstud(req, res) {
    let data = await model.getstud();
    return resSender(res, 200, data);
}
async function insertstud(req, res) {
    let stud = req.body;
    if (stud.name == null || !(/^[a-zA-Z]+$/).test(stud.name)) {
        return resSender(res, 400, { message: "name is invalid/required" })
    }
    if (stud.year == null || !(/^\d{1}/).test(stud.year)) {
        return resSender(res, 400, { message: "year is invalid/required" })
    }
    if (stud.start_year == null || !(/^\d{4}/).test(stud.start_year)) {
        return resSender(res, 400, { message: "start year is invalid/required" })
    }
    if (stud.end_year == null || !(/^\d{4}/).test(stud.end_year)) {
        return resSender(res, 400, { message: "end year is invalid/required" })
    }
    if (stud.dept_id == null || !(/^\d/).test(stud.dept_id)) {
        return resSender(res, 400, { message: "department id is invalid/required" })
    }
    if(stud.dob==null || !(/^\d{4}-\d{2}-\d{2}/).test(stud.dob)){
        return resSender(res, 400, { message: " date of birth is invalid/required" })
        }
    if (stud.email == null || !stud.email.includes("@")) {
        return resSender(res, 400, { message: "email is invalid/required" })
    }
    if (stud.phone == null || !(/^\d{10}/).test(stud.phone)) {
        return resSender(res, 400, { message: "phone no is invalid/required" })
    }
    if (stud.address == null || !(/\w/).test(stud.address)) {
        return resSender(res, 400, { message: " addres is required" })
    }
    
    let result=await model.insertstud(stud);
    if(result=="inserted"){
        return resSender(res, 200, { message: result })
    }
    else{
        return resSender(res, 400, { message: result })
    }
    
    
}
module.exports = {
    getstud,
    insertstud
}