const db = require('../config/db');

async function login(id, password) {
    return (await db.query("SELECT id,name FROM users WHERE id=$1 AND password=$2",[id,password])).rows
}
async function stafflogin(id, password) {
    return (await db.query("SELECT id,name,role FROM staffs WHERE id=$1 AND password=$2",[id,password])).rows
}
async function studlogin(id, password) {
    return (await db.query("SELECT id,name FROM students WHERE id=$1 AND password=$2",[id,password])).rows
}

module.exports = {login,stafflogin,studlogin};

