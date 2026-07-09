require('dotenv').config();

const express=require('express');

const logrouter=require('./Router/loginRoute');
const regrouter=require('./Router/registerRouter');
const studentrouter=require('./Router/studentRouter');
const deptrouter=require('./Router/deptRouter');
const staffrouter=require('./Router/staffRouter');
const subjectrouter=require('./Router/subjectRouter');
const markrouter=require('./Router/markRouter')

const authentication=require('./middleware/authentication');
const markauthorization=require('./middleware/markauthorization')

const app=express();
app.use(express.json());

app.use('/login',logrouter);
app.use('/register',regrouter);

app.use('/api/student',authentication,studentrouter);
app.use('/api/department',authentication,deptrouter);
app.use('/api/staff',authentication,staffrouter);
app.use('/api/subject',authentication,subjectrouter);
app.use('/api/mark',authentication,markauthorization,markrouter)

const port=process.env.PORT;
app.listen(port);