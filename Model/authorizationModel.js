const db = require('../config/db');
async function staff_autn(id) {
    return (await db.query("SELECT * FROM staffs WHERE id=$1", [id])).rows;
}
async function admin_autn(id){
    return (await db.query("SELECT * FROM users WHERE id=$1", [id])).rows;
}
async function stud_autn(id){
    return (await db.query("SELECT * FROM students WHERE id=$1", [id])).rows;
}

module.exports={staff_autn,admin_autn,stud_autn}