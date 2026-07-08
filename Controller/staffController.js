const staffmodel = require('../Model/staffModel');
const { ressender, validator } = require('../utils/globalfunctions');

async function getstaff(req, res) {
    let result = await staffmodel.getstaff();
    ressender(res, 200, result);
}
async function insertstaff(req, res) {
    let staff = req.body;

    let staff_needs = {
        name: /^[a-zA-Z\s]+$/,
        role: /^[a-zA-Z\s]+$/,
        dept_id: /^\d/,
        onboarding_date: /^\d{4}-\d{2}-\d{2}/,
        email: /\w@+\w/,
        phone: /^\d{10}/,
        address: /\w+/,
        experience_in_year: /^\d$/
    }

    let valid = validator(staff_needs, staff)
    if (valid == true) {
        let result = await staffmodel.insertstaff(staff);
        if (result.rowCount) {
            ressender(res, 200, { command: result.command, rowcount: result.rowCount ,status:"inserted"});
        }
        else {
            ressender(res, 400, { message: result });
        }
    }
    else{
        ressender(res,400,valid)
    }

}
async function updatestaff(req, res) {
    let staff = req.body;
    let result = await staffmodel.updatestaff(staff);
    if (result.rowCount == 1) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "updated" });
    }
    else if (result.rowCount == 0) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "staff not founded" });
    }
    else {
        ressender(res, 400, { message: result });
    }

}
async function deletestaff(req, res) {
    let { id } = req.body;
    let result = await staffmodel.deletestaff(id);
    if (!result.rowCount == 0) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount })
    }
    else {
        ressender(res, 400, { message: "staff not founded" })
    }

}
module.exports = {
    getstaff,
    insertstaff,
    updatestaff,
    deletestaff
}