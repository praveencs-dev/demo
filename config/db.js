const {Pool}=require('pg');
const pool=new Pool({
    host:process.env.DB_SERVER,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PW,
    port:process.env.DB_PORT

});
try{
    pool.connect()
    .then(()=>console.log("db connected"))
}
catch(err){
    console.log("db not connected");
}
module.exports=pool;