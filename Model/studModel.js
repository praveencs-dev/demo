const db = require('../config/db');
async function getstud() {
    return (await db.query("SELECT * FROM students")).rows
}
async function insertstud(student) {
    try {
        await db.query("INSERT INTO students(name,year,start_year,end_year,dept_id,email,phone,address,dob)values($1,$2,$3,$4,$5,$6,$7,$8,$9)",
            [student.name, student.year, student.start_year, student.end_year, student.dept_id, student.email, student.phone, student.address, student.dob]);
        return "inserted"
    } catch (err) {
        return {
            code:err.code,
            detail:err.detail
        }
    }
}
module.exports={
    getstud,
    insertstud
}