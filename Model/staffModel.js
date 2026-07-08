const { Result } = require('pg');
const db=require('../config/db');
async function getstaff(){
    let result=(await db.query('SELECT * FROM staffs')).rows
    return result
}
async function insertstaff(staff){
    try{
        let result =await db.query("INSERT INTO staffs(name,role,dept_id,onboarding_date,email,phone,address,experience_in_year)values($1,$2,$3,$4,$5,$6,$7,$8)",
        [staff.name,staff.role,staff.dept_id,staff.onboarding_date,staff.email,staff.phone,staff.address,staff.experience_in_year]
    )
        return result 
    }
    catch(err){
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function updatestaff(staff){
    try{
        let result=await db.query(`UPDATE staffs SET ${staff.property}=$1 WHERE id=$2`,
            [staff.value,staff.id]
        );
        return result;
    }
    catch(err){
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function deletestaff(id){
    let result=await db.query('DELETE FROM  staffs WHERE id=$1',[id])
    return result;
}

module.exports={
    getstaff,
    insertstaff,
    updatestaff,
    deletestaff
}