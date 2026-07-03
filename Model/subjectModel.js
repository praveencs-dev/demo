const  db=require('../config/db');

async function getsub(){
    let result=(await db.query('SELECT * FROM subject')).rows;
    return result;
}
async function insertsub(subject){
    try{
        await db.query('INSERT INTO subject(name,semester,type)values($1,$2,$3)',[subject.name,subject.semester,subject.type]);
        return "inserted"
    }
    catch(err){
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function updatesub(subject){
    try{
        await db.query(`UPDATE subject SET ${subject.property}=$1 WHERE id=$2`,[subject.value,subject.id]);
        return "updated";
    }
    catch(err){
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
async function deletesubject(id){
    let result=await db.query('DELETE FROM  subject WHERE id=$1',[id]);
    return result;
}
module.exports={
    getsub,insertsub,updatesub,deletesubject
};