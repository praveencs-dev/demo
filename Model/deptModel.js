const db = require('../config/db');
async function getdept() {
    let result = (await db.query("SELECT * FROM department")).rows
    return result
}
async function insertdept(dept) {
    try {
        await db.query("INSERT INTO department(Dept_name,course_duration,duration_type)values($1,$2,$3)",
            [dept.name, dept.course_duration, dept.duration_type]);
        return "inserted"
    }
    catch (err) {
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function updatedept(dept) {
    try {
        await db.query(`UPDATE department SET ${dept.column}=$1 WHERE id=$2`,
            [dept.value,dept.id]);
        return "updated"
    }
    catch (err) {
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function deletedept(id){
    await db.query(`UPDATE department SET status='inactive' WHERE id=$1`,[id]);
    return "deactivated"
}
module.exports={
    getdept,
    insertdept,
    updatedept,
    deletedept
}