const db = require('../config/db');
async function getdept() {
    let result = (await db.query("SELECT * FROM department")).rows
    return result
}
async function insertdept(dept) {
    try {
         let result=await db.query("INSERT INTO department(Dept_name,course_duration,duration_type)values($1,$2,$3)",
            [dept.Dept_name, dept.course_duration, dept.duration_type]);
        return result
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
        let result=await db.query(`UPDATE department SET ${dept.property}=$1 WHERE id=$2`,
            [dept.value,dept.id]);
        return result
    }
    catch (err) {
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function deletedept(id){
    let result=await db.query(`UPDATE department SET status='inactive' WHERE id=$1`,[id]);
    return result
}
module.exports={
    getdept,
    insertdept,
    updatedept,
    deletedept
}