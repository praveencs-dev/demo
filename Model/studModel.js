const db = require('../config/db');
async function getstud() {
    return (await db.query("SELECT id,name,year,start_year,end_year,dept_id,email,phone,address,dob  FROM students")).rows
}
async function insertstud(student) {
    try {
        await db.query("INSERT INTO students(name,year,start_year,end_year,dept_id,email,phone,address,dob,password)values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
            [student.name, student.year, student.start_year, student.end_year, student.dept_id, student.email, student.phone, student.address, student.dob,student.password]);
        return "inserted"
    } catch (err) {
        return {
            code: err.code,
            detail: err.detail
        }
    }
}
async function updatestud(stud){
    try{
        let result=await db.query(`UPDATE students SET ${stud.property}=$1 WHERE id=$2`,
            [stud.value,stud.id]
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

async function allocated_subject(semester) {
    return (await db.query(`select s.name as name ,d.Dept_name as deptatment, json_agg(json_build_object('id',sub.id,'name',sub.name)) as subjects
                           from students as s
                           join department as d on s.dept_id=d.id
                           join dept_sub_allocation as dsa on d.id=dsa.department_id
                           join subject as sub on dsa.sub_id=sub.id
                           where dsa.semester=$1
                           group by s.name,d.dept_name`,[semester])).rows
}
module.exports = {
    getstud,
    insertstud,
    updatestud,
    allocated_subject
}