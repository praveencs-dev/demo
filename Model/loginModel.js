const db = require('../config/db');

async function login(name, password) {
    return (await db.query("SELECT id,name FROM users WHERE id=$1 AND password=$2",[name,password])).rows
}
async function stafflogin(id, password) {
    return (await db.query("SELECT id,name,role FROM staffs WHERE id=$1 AND password=$2",[id,password])).rows
}

module.exports = {login,stafflogin};

