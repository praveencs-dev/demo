const usermodel = require('../Model/userModel');


async function getstud(req, res) {
    let data = await usermodel.getstud();
    return ressender(res, 200, data);
}

async function insertstud(req, res) {
    var student = req.body;
    var student_needs = {
        name: /^[a-zA-Z]+$/,
        year: /^\d{1}$/,
        start_year: /^\d{4}$/,
        end_year: /^\d{4}$/,
        dept_id: /^\d/,
        dob: /^\d{4}-\d{2}-\d{2}/,
        email: /\w@+\w/,
        phone: /^\d{10}/,
        address: /\w/
    }

    let valid = validator(res, student_needs, student)

    if (valid == true) {
        let result = await usermodel.insertstud(student);
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
module.exports = {
    getstud,
    insertstud
}