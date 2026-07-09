const markmodel = require('../Model/markModel');
const { ressender} = require('../utils/globalfunctions');

async function getmark(req, res) {
    let result = await markmodel.getmark();
    ressender(res, 200, result);
}
async function insertmark(req, res) {
    let mark = req.body;

    let result = await markmodel.insertmark(mark);
    if (result.rowCount) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "inserted" });
    }
    else {
        ressender(res, 400, { message: result });
    }


}
async function updatemark(req, res) {
    let mark = req.body;
    let result = await markmodel.updatemark(mark);
    if (result.rowCount == 1) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "updated" });
    }
    else if (result.rowCount == 0) {
        ressender(res, 200, { command: result.command, rowcount: result.rowCount, status: "not founded" });
    }
    else {
        ressender(res, 400, { message: result });
    }

}
module.exports={
    getmark,insertmark,updatemark
}