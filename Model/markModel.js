const db=require('../config/db');
async function getmark(){
    let result=(await db.query('SELECT * FROM mark')).rows
    return result
}
async function insertmark(mark){
    try{
        let result =await db.query("INSERT INTO mark(student_id,allotment_id,total_mark,obtained_mark,status)values($1,$2,$3,$4,$5)",
        [mark.student_id,mark.allotment_id,mark.total_mark,mark.obtained_mark,mark.status]
    )
        return result;
    }
    catch(err){
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function updatemark(mark){
    try{
        let result=await db.query(`UPDATE mark SET ${mark.property}=$1 WHERE student_id=$2 AND allotment_id=$3`,
            [mark.value,mark.student_id,mark.allotment_id]
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
module.exports={
    getmark,insertmark,updatemark
}