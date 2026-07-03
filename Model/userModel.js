const db = require('../config/db');

async function login(name, password) {
    return (await db.query("SELECT id,name,role FROM users WHERE name=$1 AND password=$2", [name, password])).rows
}
async function register(name, email, age, password, role) {
    return await db.query("INSERT INTO users(name,email,age,password,role)values($1,$2,$3,$4,$5)", [name, email, age, password, role]);


}


module.exports = {login, register}

