require('dotenv').config();

const express=require('express');

const studentrouter=require('./Router/studentRouter');
const logrouter=require('./Router/loginRoute');
const regrouter=require('./Router/registerRouter');
const deptrouter=require('./Router/deptRouter');
const staffrouter=require('./Router/staffRouter');
const subjectrouter=require('./Router/subjectRouter');

const authentication=require('./middleware/authentication');

const app=express();
app.use(express.json());

app.use('/login',logrouter);
app.use('/register',regrouter);

app.use('/api/student',authentication,studentrouter);
app.use('/api/department',authentication,deptrouter);
app.use('/api/staff',authentication,staffrouter);
app.use('/api/subject',authentication,subjectrouter)

const port=process.env.PORT;
app.listen(port);